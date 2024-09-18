import os

import uvicorn
from fastapi import FastAPI, UploadFile, HTTPException
from pydantic import BaseModel
from groq import Groq

app = FastAPI()

# Initialize Groq for Whisper and Llama3
groq_client = Groq()

# Global variable to store transcription for now
transcribed_text = ""


def save_audio_file(file: UploadFile) -> str:
    """Accepts an audio file, and saves it."""
    file_path = os.path.join(os.getcwd(), file.filename)
    with open(file_path, "wb") as audio_file:
        audio_file.write(file.file.read())
    return file_path


def transcribe_audio(file_path: str) -> str:
    """Use Groq API for Whisper transcription of audio."""
    try:
        with open(file_path, "rb") as audio_file:
            transcription = groq_client.audio.transcriptions.create(
                file=(file_path, audio_file.read()),
                model="whisper-large-v3",
                prompt="generate text of what you hear",
                response_format="verbose_json"
            )
        return transcription.text
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Transcription failed: {str(e)}")


@app.post("/upload")
async def upload_audio(file: UploadFile):
    """Endpoint for uploading audio and transcribing it using Whisper."""
    if file.content_type not in ["audio/mpeg", "audio/wav"]:
        raise HTTPException(status_code=400, detail="Invalid audio format. Supported formats: mp3, wav.")

    try:
        file_path = save_audio_file(file)
        transcription_text = transcribe_audio(file_path)
        global transcribed_text
        transcribed_text = transcription_text
        return {"transcription": transcription_text}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing audio file: {str(e)}")


class TextRequest(BaseModel):
    text: str


def generate_ai_response(user_text: str, transcription: str) -> str:
    """Generate AI response using the Llama3 model based on transcription and user input."""
    if not user_text.strip():  # removes any leading or trailing whitespace and checks if the string is empty
        return "No question provided for the AI to respond."

    messages = [
        {"role": "system",
         "content": f"You are an AI agent answering questions related to the audio transcription: {transcription}. Only respond to relevant questions."},
        {"role": "user", "content": user_text}
    ]

    completion = groq_client.chat.completions.create(
        model="llama3-70b-8192",
        messages=messages,
        temperature=1,
        max_tokens=1024,
        top_p=1,
        stream=True
    )

    response_text = ""
    for chunk in completion:
        response_text += chunk.choices[0].delta.content or ""

    return response_text


@app.post("/response")
async def get_ai_response(request: TextRequest):
    """Endpoint for generating AI responses based on the transcription and user query."""

    if not transcribed_text:
        raise HTTPException(status_code=400, detail="No transcription available. Please upload audio first.")

    ai_response = generate_ai_response(request.text, transcribed_text)
    return {"response": ai_response}


if __name__ == "__main__":
    uvicorn.run(app, port=9900, host="127.0.0.1")

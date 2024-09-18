# Mohamed's Solution for the Backend Developer Assessment: Voice AI Agent

This project is a FastAPI-based web service that allows users to upload audio files for transcription using the Whisper
model and ask questions about the transcription using the Llama3
model. [Watch the video explanation here](https://drive.google.com/file/d/1Hi1AAJmnP0cH_25h-_9yAly3nu4O_PVE/view?usp=sharing)

## Future Improvements:

- Adding all API endpoints to route folder.
- Support additional audio formats.
- Separate the Groq API client logic into its own module, improving code
  organization and maintainability.
- Adding real time capability to shows the response in real time as a chunk by chunk.

## Features

- Audio Upload and Transcription: Upload audio files in `.mp3` or `.wav` formats, and get them transcribed to text
  using the Whisper model.
- AI-based Question Answering: Ask questions related to the transcribed text using the Llama3 AI model. The AI will
  only respond if the question is related to the transcription.
- Real-time Responses: AI responses are streamed back in real-time to ensure quick interaction.

## Requirements

- Python 3.8+
- FastAPI for creating the API.
- Groq client for Whisper and Llama3 models.
- uvicorn for running the FastAPI server.

## Installation

### 1. Clone the repository

### 2. Create a virtual environment

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

### 3. Install the dependencies

```bash
pip install -r requirements.txt
```

### 4. Environment Variables

Ensure you configure your Groq API credentials if required. Set up the necessary environment variables such
as `GROQ_API_KEY` as per your API provider's instructions.

## Usage

### 1. Start the FastAPI server

run the api.py by IDE or with this command:

```bash
python api.py
```

The server will be available at `http://127.0.0.1:8000`.

### 2. API Endpoints

#### 2.1. Upload Audio File for Transcription

- Endpoint: `/upload`
- Method: `POST`
- Description: Uploads an audio file and returns its transcription.

##### Request Example:

```bash
curl -X 'POST' \
  'http://127.0.0.1:8000/upload' \
  -H 'Content-Type: multipart/form-data' \
  -F 'file=@your-audio-file.wav'
```

##### Response Example:

```json
{
  "transcription": "This is the transcribed text from the audio file."
}
```

#### 2.2. Get AI Response Based on Transcription

- Endpoint: `/response`
- Method: `POST`
- Description: Asks a question related to the transcription, and the AI will provide an answer if it relates to the
  audio.

##### Request Example:

```bash
curl -X 'POST' \
  'http://127.0.0.1:8000/response' \
  -H 'Content-Type: application/json' \
  -d '{"text": "What was the main point of the audio?"}'
```

##### Response Example:

```json
{
  "response": "The main point of the audio is..."
}
```

## Error Handling

- If an invalid file format is uploaded (i.e., not `.mp3` or `.wav`), the API will return a `400 Bad Request` error.
- If transcription fails, the API will return a `500 Internal Server Error` with details of the failure.
- If no transcription is available when requesting an AI response, the API will return a `400 Bad Request` error.

### Steps Recap:

- Features: describe the core functionality.
- Future Improvements: outline any Future features might be good for the project.
- Installation: provides the necessary setup steps.
- API Endpoints: detail how to use the upload and AI response endpoints.
- Error Handling: outlines potential issues the user might encounter.

---------- 



# Old Readme:
----------

# Backend Developer Assessment: Voice AI Agent

## Project Overview

**Task:** Develop a backend system for a Voice AI Agent. The system will handle audio input, process it, and generate
responses using AI. This project is designed to be completed within 5-10 hours with basic functionality, but the bonus
tasks offer a chance to demonstrate advanced skills.

**Timeline:** 16/09/2024 to 23/09/2024 (British Time)

**Languages/Frameworks:**

- **Frontend:** Next.js, TypeScript, HTML, CSS (provided template)
- **Backend:** Any backend language that easily integrates with Next.js/TypeScript (e.g., Node.js with Express, Python
  with Flask/Django, etc.)

**Deployment:** Use a free cloud provider (e.g., Heroku free tier) or run locally.

## Core Requirements

### 1. Audio Input Processing

- **Endpoint:** `POST /upload`
    - **Description:** Accepts audio files (.wav or .mp3) from the user.
    - **Request:**
      ```json
      {
        "file": "audio_file.wav"
      }
      ```
    - **Response:**
      ```json
      {
        "transcription": "Transcribed text goes here."
      }
      ```
    - **Service:** Integrate with a Speech-to-Text API, such as Google Cloud Speech-to-Text or AWS Transcribe.

### 2. AI-Based Response Generation

- **Endpoint:** `POST /response`
    - **Description:** Generates a response based on the transcribed text.
    - **Request:**
      ```json
      {
        "text": "Transcribed text goes here."
      }
      ```
    - **Response:**
      ```json
      {
        "response": "AI-generated response text goes here."
      }
      ```
    - **Service:** Integrate with an NLP API like OpenAI’s GPT-3 or GPT-4.

### 3. Basic Authentication (Optional)

- **Endpoint:** `POST /login`
    - **Description:** Authenticates the user and provides a JWT token.
    - **Request:**
      ```json
      {
        "username": "user",
        "password": "password"
      }
      ```
    - **Response:**
      ```json
      {
        "token": "JWT token goes here."
      }
      ```

- **Middleware:** Implement JWT authentication for `/upload` and `/response` endpoints.

### 4. Deployment

- **Instructions:** Deploy to a free cloud provider such as Heroku or run locally. Ensure the backend is functional and
  accessible.

### 5. Architecture/Design Documentation

- **Task:** Provide a detailed architecture and design document for your backend system.
    - **Requirements:**
        - **System Architecture Diagram:** Show how different components (e.g., API endpoints, third-party services)
          interact.
        - **Data Flow Diagram:** Illustrate the flow of data from user input to response generation.
        - **Design Decisions:** Describe any key design decisions made, including why certain technologies or approaches
          were chosen.
    - **Format:** Include diagrams and descriptions in your GitHub repository or as a separate document.

## Bonus Tasks (Optional but encouraged)

1. **Context Management:**
    - Implement advanced context management to handle multiple sessions and maintain conversation state over time.
    - Store and manage session history to allow the AI agent to have contextually aware conversations.
    - **Example:** Maintain a conversation history for each user session, allowing the AI to reference previous
      interactions.

2. **Multi-Language Support:**
    - Integrate multilingual support for both speech-to-text and text-to-speech services.
    - Ensure the system can process and respond in multiple languages based on user input.
    - **Example:** Use language detection to switch between supported languages and provide responses in the detected
      language.

3. **Customizable Voice Agent Personality:**
    - Allow users to select different "personalities" for the voice agent, such as formal, casual, or humorous.
    - Customize the AI responses based on the selected personality to make interactions more engaging.
    - **Example:** Provide a configuration endpoint where users can set their preferred personality, and modify response
      generation logic accordingly.

4. **CI/CD Integration:**
    - Set up a comprehensive CI/CD pipeline to automate testing and deployment.
    - Use a platform like GitHub Actions or CircleCI to automate build, test, and deployment processes.
    - **Example:** Create workflows for automated testing, linting, and deployment to a staging environment before
      production.

## User Stories

1. **Audio Input Processing:**
    - "As a user, I can upload an audio file, and the system will convert my speech to text."

2. **AI Response Generation:**
    - "As a user, after my speech is converted to text, I receive a response from the AI agent based on my input."

3. **Real-Time Interaction:**
    - "As a user, I can have a real-time conversation with the AI agent, where my audio is processed, and the system
      responds quickly."

4. **Authentication:**
    - "As a user, I must authenticate before interacting with the AI agent to ensure my session is private."

## Frontend Flow (Basic UI)

### 1. Audio Input

- **Microphone Button:** A button to start and stop audio recording.
- **Upload Button:** Option to upload an audio file if recording is not preferred.
- **Audio Recorder UI:** Displays recording status with visual feedback (e.g., waveform or indicator).

### 2. Interaction Display

- **Transcription Display:** Shows the transcribed text from the user's audio input.
- **AI Response Display:** Area to display the AI’s response text.
- **Audio Playback (Optional):** Plays back the AI’s response if text-to-speech is implemented.

### Example Frontend Flow

1. **User accesses the landing page.**
2. **They click the microphone button to start recording.**
3. **The audio is sent to the backend for processing.**
4. **The transcribed text is displayed on the UI.**
5. **The AI’s response is displayed, and optionally, audio playback is provided.**

## What You Should Provide

1. **GitHub Repository:**
    - Create a repository with your code and necessary documentation.
    - Push your changes before the deadline.

2. **Project Instructions:**
    - **Overview:** General description of the project.
    - **Requirements:** Detailed features and functionality.
    - **Timeline:** Deadline for project submission.

3. **Design/API Documentation:**
    - Provide links or documentation for the Speech-to-Text and NLP APIs used.
    - Include basic instructions for testing endpoints.
    - **Architecture/Design Documentation:** Include a system architecture diagram, data flow diagram, and explanations
      of design decisions.

4. **Setup Instructions:**
    - **Environment Setup:** Instructions for setting up the development environment.
    - **Deployment Instructions:** Guidelines for deploying the solution to a cloud platform or running locally.

5. **Submission Guidelines:**
    - **Code Submission:** Push your code to the GitHub repository before the deadline.
    - **Loom Video:** Record a brief video (5 minutes max) covering:
        - Core functionalities of your backend.
        - How to test the endpoints.
        - Any additional features or considerations.

## Evaluation Criteria

- **Functionality:** Verify that core features work as described.
- **Code Quality:** Assess the cleanliness, readability, and maintainability of the code.
- **Architecture/Design:** Review the provided architecture and design documentation.
- **Deployment:** Ensure the backend is deployed correctly and accessible or runs locally.
- **Testing:** Confirm that basic testing and debugging are completed.


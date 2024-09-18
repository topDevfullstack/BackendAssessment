import axios from 'axios';
import { TranscriptionResponse } from '../../../../interfaces';

const ASSEMBLY_AI_KEY = process.env.ASSEMBLY_AI_KEY as string;

export async function uploadFile(file: File): Promise<string> {
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await axios.post(
            'https://api.assemblyai.com/v2/upload',
            formData,
            {
                headers: {
                    authorization: ASSEMBLY_AI_KEY,
                    'Content-Type': 'multipart/form-data',
                },
            }
        );
        return response.data.upload_url;
    } catch (error) {
        throw new Error(`Error uploading file: ${error}`);
    }
}

export async function transcribeAudio(uploadUrl: string): Promise<{ id: string; status: string; text: string }> {
    try {
        // 1. Send the uploaded file URL to AssemblyAI for transcription
        const transcriptionResponse = await axios.post(
            'https://api.assemblyai.com/v2/transcript',
            { audio_url: uploadUrl },
            {
                headers: {
                    authorization: ASSEMBLY_AI_KEY,
                },
            }
        );

        const transcriptionID = transcriptionResponse.data.id;

        // 2. Poll the transcription status with the transcription ID
        let transcript = await axios.get(
            `https://api.assemblyai.com/v2/transcript/${transcriptionID}`,
            {
                headers: {
                    authorization: ASSEMBLY_AI_KEY,
                },
            }
        );

        // 3. Wait until transcription is completed
        while (transcript.data.status !== 'completed') {
            console.log('Transcription in progress...');
            await new Promise(resolve => setTimeout(resolve, 5000)); // Wait 5 seconds
            transcript = await axios.get(
                `https://api.assemblyai.com/v2/transcript/${transcriptionID}`,
                {
                    headers: {
                        authorization: ASSEMBLY_AI_KEY,
                    },
                }
            );
        }

        const responsePayload: TranscriptionResponse = {
            id: transcript.data.id,
            status: transcript.data.status,
            text: transcript.data.text,
        };
        return responsePayload;

    } catch (error) {
        throw new Error(`Error during transcription: ${error}`);
    }
}

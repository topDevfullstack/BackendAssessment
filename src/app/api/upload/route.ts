import { uploadFile, transcribeAudio } from './assemblyAiService';

export async function POST(req: Request): Promise<Response> {
    try {
        if (!req.formData) throw new Error('No file uploaded');

        const formData = await req.formData();
        const file = formData.get('file') as File;

        if (!file) throw new Error('File not found in form data');

        // 1. Upload audio file to AssemblyAI
        const uploadUrl = await uploadFile(file);

        // 2. Send the uploaded file for transcription
        const transcriptionData = await transcribeAudio(uploadUrl);

        return new Response(JSON.stringify(transcriptionData), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });

    } catch (error) {
        console.error('Error:', error);
        return new Response(`Error: ${error}`, { status: 500 });
    }
}

export async function GET(req: Request): Promise<Response> {
    return new Response('GET method is not implemented.', { status: 501 });
}

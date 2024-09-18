import OpenAI from 'openai';
export async function POST(req: Request): Promise<Response> {
    try {
        const { text }: GenerateResponseRequest = await req.json();

        if (!text) {
            throw new Error('No text provided');
        }

        // Generate response using the NLP API
        const aiResponse = await generateResponse(text);

        const responsePayload: GenerateResponseResponse = {
            response: aiResponse,
        };

        return new Response(JSON.stringify(responsePayload), {
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

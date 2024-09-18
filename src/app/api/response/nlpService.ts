import axios from 'axios';
import { log } from 'node:console';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY as string;

export async function generateResponse(text: string): Promise<string> {
    try {
        log('Generating response...');
        log(text);
        const response = await axios.post(
            'https://api.openai.com/v1/completions',
            {
                model: 'gpt-4', // or 'gpt-3.5-turbo'
                messages: [{ role: 'user', content: text }],
                max_tokens: 150,
                temperature: 0.7,
            },
            {
                headers: {
                    Authorization: `Bearer ${OPENAI_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        log(response);
        const aiResponse = response.data.choices[0].text.trim();
        return aiResponse;
    } catch (error) {
        throw new Error(`Error generating response: ${error}`);
    }
}

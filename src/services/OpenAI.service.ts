import OpenAI from "openai";
import { Message } from "../utils/types";
import { companyInfo } from "../utils/companyInfo";

// OpenAI SDK instance configured with the API key from the environment variables and allowing browser usage.
const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
})

// Function to generate a response from the ChatBot based on the chat history and the user's prompt.
const generateChatResponse = async (chatHistory: Message[], prompt: string): Promise<string> => {
    const response = await openai.chat.completions.create({
        model: 'gpt-4o',
        messages: [
            {
                role: 'system',
                content: companyInfo
            },
            ...chatHistory,
            {
                role: 'user',
                content: prompt
            }
        ]
    })

    return response.choices[0].message.content || 'Error generating response';
}


export {
    generateChatResponse 
};
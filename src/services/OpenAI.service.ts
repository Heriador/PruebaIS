import OpenAI from "openai";
import { Message } from "../utils/types";
import { companyInfo } from "../utils/companyInfo";

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
})

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

    console.log(response)

    return response.choices[0].message.content || 'Error generating response';
}


export {
    generateChatResponse 
};
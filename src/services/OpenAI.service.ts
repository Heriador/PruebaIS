import OpenAI from "openai";
import { Message } from "../components/ChatBot/ChatBot";

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
})

const generateChatResponse = async (chatHistory: Message[], prompt: string): Promise<Message> => {
    const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'system',
                content: 'You are a chatbot that helps users answer their questions.'
            },
            ...chatHistory,
            {
                role: 'user',
                content: prompt
            }
        ]
    })

    console.log(response)

    return {
        role: 'assistant',
        content: response.choices[0].message.content || '' 
    };
}


export {
    generateChatResponse 
};
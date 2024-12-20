import ChatBotHeader from './components/ChatBotHeader/ChatBotHeader'
import ChatBotBody from './components/ChatBotBody/ChatBotBody'
import ChatBotFooter from './components/ChatBotFooter/ChatBotFooter'
import './ChatBot.css'
import { useState } from 'react'
import { generateChatResponse } from '../../services/OpenAI.service'

export type Message = {
  role: 'user' | 'developer' | 'assistant',
  content: string
}


const Chat = () => {

  const [chatHistory, setChatHistory] = useState<Message[]>([])

  const generateBotResponse = async (message: string): Promise<Message> => {
    return generateChatResponse(chatHistory, message)
  }

  return (
    <div className='chat_container'>
      <ChatBotHeader/>
      <ChatBotBody chatHistory={chatHistory}/>
      <ChatBotFooter setChatHistory={setChatHistory} generateBotResponse={generateBotResponse}/>
    </div>
  )
}

export default Chat
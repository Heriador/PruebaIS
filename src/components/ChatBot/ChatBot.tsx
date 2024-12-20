import ChatBotHeader from './components/ChatBotHeader/ChatBotHeader'
import ChatBotBody from './components/ChatBotBody/ChatBotBody'
import ChatBotFooter from './components/ChatBotFooter/ChatBotFooter'
import './ChatBot.css'
import { useState } from 'react'

export type Message = {
  role: 'user' | 'developer' | 'assistant',
  content: string
}


const Chat = () => {

  const [chatHistory, setChatHistory] = useState<Message[]>([])

  return (
    <div className='chat_container'>
      <ChatBotHeader/>
      <ChatBotBody chatHistory={chatHistory}/>
      <ChatBotFooter setChatHistory={setChatHistory}/>
    </div>
  )
}

export default Chat
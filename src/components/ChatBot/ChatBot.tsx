import ChatBotHeader from './components/ChatBotHeader/ChatBotHeader'
import ChatBotBody from './components/ChatBotBody/ChatBotBody'
import ChatBotFooter from './components/ChatBotFooter/ChatBotFooter'
import './ChatBot.css'
import { useState } from 'react'

export type ChatMessage = {
  role: 'user' | 'developer',
  content: string
}


const Chat = () => {

  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([])

  return (
    <div className='chat_container'>
      <ChatBotHeader/>
      <ChatBotBody/>
      <ChatBotFooter setChatHistory={setChatHistory}/>
    </div>
  )
}

export default Chat
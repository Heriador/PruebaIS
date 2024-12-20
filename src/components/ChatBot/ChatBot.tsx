import ChatBotHeader from './components/ChatBotHeader/ChatBotHeader'
import ChatBotBody from './components/ChatBotBody/ChatBotBody'
import ChatBotFooter from './components/ChatBotFooter/ChatBotFooter'
import './ChatBot.css'
import { useState } from 'react'
import { generateChatResponse } from '../../services/OpenAI.service'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faMessage } from '@fortawesome/free-solid-svg-icons'
import { Message } from '../../utils/types'


const Chat = () => {

  const [chatHistory, setChatHistory] = useState<Message[]>([])
  const [showChatBot, setShowChatBot] = useState(false)

  const generateBotResponse = async (message: string): Promise<string> => {
    return generateChatResponse(chatHistory, message)
  }

  const toggleChat = () => {
    setShowChatBot(!showChatBot)
  }

  return (
    <div className={`container ${showChatBot ? 'show-chatbot' : ''}`}>
      <Button id="chatbot-toggler" variant='primary' onClick={toggleChat}>
        <FontAwesomeIcon icon={showChatBot ? faClose : faMessage} />
      </Button>
      <div className="chatbot-popup">
        <ChatBotHeader setShowChatBot={setShowChatBot}/>
        <ChatBotBody chatHistory={chatHistory}/>
        <ChatBotFooter setChatHistory={setChatHistory} generateBotResponse={generateBotResponse}/>
      </div>
    </div>
  )
}

export default Chat
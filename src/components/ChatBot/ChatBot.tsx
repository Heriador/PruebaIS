import ChatBotHeader from './components/ChatBotHeader/ChatBotHeader'
import './ChatBot.css'
import ChatBotBody from './components/ChatBotBody/ChatBotBody'

const Chat = () => {
  return (
    <div className='chat_container'>
      <ChatBotHeader/>
      <ChatBotBody/>
    </div>
  )
}

export default Chat
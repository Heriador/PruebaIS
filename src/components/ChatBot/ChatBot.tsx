import ChatBotHeader from './components/ChatBotHeader/ChatBotHeader'
import ChatBotBody from './components/ChatBotBody/ChatBotBody'
import ChatBotFooter from './components/ChatBotFooter/ChatBotFooter'
import './ChatBot.css'

const Chat = () => {
  return (
    <div className='chat_container'>
      <ChatBotHeader/>
      <ChatBotBody/>
      <ChatBotFooter/>
    </div>
  )
}

export default Chat
import { Message } from '../../../ChatBot'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import ChatBotIcon from '../../ChatBotIcon'

type Props = {
    message: Message
}

const ChatMessage = ({ message }: Props) => {
  return (
    <div className={`message ${message.role === 'assistant' ? 'bot': message.role}-message`}>
        {message.role === 'assistant'&& <ChatBotIcon/>}
        <p className="message-text">
            {message.content}
        </p>
        {message.role === 'user' && <FontAwesomeIcon icon={faUser} />}
    </div>
  )
}

export default ChatMessage
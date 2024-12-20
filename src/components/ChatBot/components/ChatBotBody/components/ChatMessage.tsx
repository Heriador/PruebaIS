import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import ChatBotIcon from '../../ChatBotIcon'
import { Message } from '../../../../../utils/types'

// Props interface to define the props of the ChatMessage component.
type Props = {
    message: Message
}

// ChatMessage component that displays a message in the chat.
const ChatMessage = ({ message }: Props) => {
  return (
    <div className={`message ${message.role === 'assistant' ? 'bot': message.role}-message
    ${message.isError ? 'error' : ''}`}>
        {message.role === 'assistant'&& <ChatBotIcon/>}
        <p className="message-text">
            {message.content}
        </p>
        {message.role === 'user' && <FontAwesomeIcon icon={faUser} />}
    </div>
  )
}

export default ChatMessage
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ChatBotIcon from "../ChatBotIcon"
import "./ChatBotBody.css"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { Message } from "../../ChatBot"
import ChatMessage from "./components/ChatMessage"

type Props = {
    chatHistory: Message[]
  }

const ChatBotBody = ({chatHistory}: Props) => {
  return (
    <div className="chat_body">
        <div className="message bot-message">
            <ChatBotIcon />
            <p className="message-text">
                Hi! I'm ChatBot. <br/> How can I help you today?
            </p>
        </div>
        <div className="message user-message">
            <p className="message-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic.
            </p>
            <FontAwesomeIcon icon={faUser} />
        </div>

        {
            chatHistory.map((message, index) => (
                <ChatMessage key={index} message={message}/>
            ))
        }

    </div>
  )
}

export default ChatBotBody
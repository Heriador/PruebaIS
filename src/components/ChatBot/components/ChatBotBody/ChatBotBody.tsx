import ChatBotIcon from "../ChatBotIcon"
import "./ChatBotBody.css"
import { Message } from "../../ChatBot"
import ChatMessage from "./components/ChatMessage"
import { useEffect, useRef } from "react"

type Props = {
    chatHistory: Message[]
  }

const ChatBotBody = ({chatHistory}: Props) => {

    const chatBodyRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        chatBodyRef.current?.scrollTo({
            top: chatBodyRef.current.scrollHeight,
            behavior: 'smooth'
        })
    }, [chatHistory])

  return (
    <div ref={chatBodyRef} className="chat_body">
        <div className="message bot-message">
            <ChatBotIcon />
            <p className="message-text">
                Hi! I'm ChatBot. <br/> How can I help you today?
            </p>
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
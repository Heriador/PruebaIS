import { Message } from "../../../../utils/types"
import ChatBotIcon from "../ChatBotIcon"
import "./ChatBotBody.css"
import ChatMessage from "./components/ChatMessage"
import { useEffect, useRef } from "react"

// Props interface to define the props of the ChatBotBody component.
type Props = {
    chatHistory: Message[]
  }

// ChatBotBody component that contains the chat history of the ChatBot.
const ChatBotBody = ({chatHistory}: Props) => {

    // Reference to the chat body div to allow scrolling to the bottom of the chat
    const chatBodyRef = useRef<HTMLDivElement>(null)

    // Scroll to the bottom of the chat body when the chat history changes
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
            // Map through the chat history and render each message
            chatHistory.map((message, index) => (
                <ChatMessage key={index} message={message}/>
            ))
        }
    </div>
  )
}

export default ChatBotBody
import { Button } from "react-bootstrap"
import ChatBotIcon from "../ChatBotIcon"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Dispatch, SetStateAction } from "react"
import "./ChatBotHeader.css"

// Props interface to define the props of the ChatBotHeader component.
type Props = {
  setShowChatBot: Dispatch<SetStateAction<boolean>>
}

// ChatBotHeader component that contains the header of the ChatBot.
const ChatBotHeader = ({setShowChatBot}: Props) => {

  // Function to close the ChatBot.
  const closeChatBot = () => {
    setShowChatBot(false)
  }

  return (
    <div className="chat_header">
      <div className="header-info">
        <ChatBotIcon/>
        <h2 className="logo-text">ChatBot</h2>
      </div>
      <Button variant="primary" onClick={closeChatBot}>
        <FontAwesomeIcon icon={faChevronDown} />
      </Button>
    </div>
  )
}

export default ChatBotHeader

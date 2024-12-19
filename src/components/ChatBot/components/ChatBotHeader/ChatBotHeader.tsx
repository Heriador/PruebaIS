import { Button } from "react-bootstrap"
import ChatBotIcon from "../ChatBotIcon"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./ChatBotHeader.css"

const ChatBotHeader = () => {
  return (
    <div className="chat_header">
      <div className="header-info">
        <ChatBotIcon/>
        <h2 className="logo-text">ChatBot</h2>
      </div>
      <Button variant="outline-light">
        <FontAwesomeIcon icon={faChevronDown} />
      </Button>
    </div>
  )
}

export default ChatBotHeader

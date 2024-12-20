import { Button } from "react-bootstrap"
import ChatBotIcon from "../ChatBotIcon"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Dispatch, SetStateAction } from "react"
import "./ChatBotHeader.css"

type Props = {
  setShowChatBot: Dispatch<SetStateAction<boolean>>
}

const ChatBotHeader = ({setShowChatBot}: Props) => {

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

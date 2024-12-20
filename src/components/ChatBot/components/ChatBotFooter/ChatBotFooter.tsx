
import { Button, Form, Col, InputGroup } from 'react-bootstrap'
import './ChatBotFooter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { Dispatch, FormEvent, SetStateAction, useState } from 'react'
import { Message } from '../../ChatBot'

type Props = {
    setChatHistory: Dispatch<SetStateAction<Message[]>>
}

const ChatBotFooter = ({ setChatHistory }: Props) => {

    const [message, setMessage] = useState('')

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        if(message.trim() === '') return

        setChatHistory(history => [...history, {role: 'user', content: message}])

        setTimeout(() => setChatHistory(history => [...history, {role: 'assistant', content: 'thinking...'}]), 600)

        setMessage('')


    }

    return (
        <div className='chat-footer'>
            <Form className='chat-form' onSubmit={handleSubmit}>
                <InputGroup as={Col} md="8">
                    <Form.Control 
                        required 
                        type="text" 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type a message..." 
                    />
                    <Button variant="primary" type="submit">
                        <FontAwesomeIcon icon={faArrowUp} />
                    </Button>
                </InputGroup>
            </Form>
        </div>
    )
}

export default ChatBotFooter
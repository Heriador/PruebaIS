
import { Button, Form, Col, InputGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { Dispatch, FormEvent, SetStateAction, useState } from 'react'
import { Message } from '../../ChatBot'
import './ChatBotFooter.css'

type Props = {
    setChatHistory: Dispatch<SetStateAction<Message[]>>,
    generateBotResponse: (message: string) => Promise<string>,
}

const ChatBotFooter = ({ setChatHistory, generateBotResponse}: Props) => {

    const [message, setMessage] = useState('')

    const updateHistory = (message: string, isError = false): void => {
        setChatHistory((prev) => [...prev.filter((_, index) => index !== prev.length - 1), {role: 'assistant', content: message, isError}])
    }

    const handleSubmit = (e: FormEvent): void => {
        e.preventDefault()

        if(message.trim() === '') return

        setChatHistory(history => [...history, {role: 'user', content: message}])

        setChatHistory(history => [...history, {role: 'assistant', content: 'thinking...'}])
        setTimeout(() => {

            generateBotResponse(message).then((response) => {
                updateHistory(response)
            })
            .catch((error) => {
                updateHistory(error.message, true)
            })

        }
        , 600)

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
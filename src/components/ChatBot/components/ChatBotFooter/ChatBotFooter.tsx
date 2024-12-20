
import { Button, Form, Col, InputGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { Dispatch, FormEvent, SetStateAction, useState } from 'react'
import './ChatBotFooter.css'
import { Message } from '../../../../utils/types'

// Props interface to define the props of the ChatBotFooter component.
type Props = {
    setChatHistory: Dispatch<SetStateAction<Message[]>>,
    generateBotResponse: (message: string) => Promise<string>,
}

// ChatBotFooter component that contains the footer of the ChatBot.
const ChatBotFooter = ({ setChatHistory, generateBotResponse}: Props) => {

    // State variable to manage the user's message.
    const [message, setMessage] = useState('')

    // Function to update the chat history with a new message from the ChatBot.
    const updateHistory = (message: string, isError = false): void => {
        setChatHistory((prev) => [...prev.filter((_, index) => index !== prev.length - 1), {role: 'assistant', content: message, isError}])
    }

    // Function to handle the form submission and send the user's message to the ChatBot.
    const handleSubmit = (e: FormEvent): void => {
        e.preventDefault()

        if(message.trim() === '') return

        // Add the user's message to the chat history
        setChatHistory(history => [...history, {role: 'user', content: message}])

        // Add a thinking message to the chat history
        setChatHistory(history => [...history, {role: 'assistant', content: 'thinking...'}])

    
        setTimeout(() => {

            // Generate a response from the ChatBot based on the user's message and update the chat history with the response or an error message
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
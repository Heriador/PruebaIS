
import { Button, Form, Col, InputGroup } from 'react-bootstrap'
import './ChatBotFooter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

type Props = {}

const ChatBotFooter = (props: Props) => {
  return (
    <div className='chat-footer'>
        <Form className='chat-form'>
            <InputGroup as={Col} md="8">
                <Form.Control required type="text" placeholder="Type a message..." />
                <Button variant="primary" type="submit">
                    <FontAwesomeIcon icon={faArrowUp} />
                </Button>
            </InputGroup>
        </Form>
    </div>
  )
}

export default ChatBotFooter
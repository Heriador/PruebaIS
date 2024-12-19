import { Container, Row } from "react-bootstrap";
import Chat from "./components/ChatBot/ChatBot";

const App = () => {
  return (
    <Container>
      <Row className="justify-content-md-center align-items-center">
          <Chat />
      </Row>
    </Container>
  );
}
 
export default App;

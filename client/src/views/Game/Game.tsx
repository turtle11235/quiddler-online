import { Container, Row, Button, Col } from 'react-bootstrap';
import './styles.css'

function Game() {
  return (
    <>
      <div className='title'>Quiddler Online</div>
      <div style={{height: "80 %"}}></div>
      <Container>
        <Row>
          <Col>
            <div className='button'>Chat</div>
          </Col>
          <Col>
            <div className='button'>Dictionary</div>
          </Col>
          <Col>
            <div className='button'>End Turn</div>
          </Col>
          <Col>
            <div className='button'>Shuffle</div>
          </Col>
          <Col>
            <div className='button'>Recall</div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Game;

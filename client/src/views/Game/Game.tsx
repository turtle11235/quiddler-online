import { Container, Row, Button, Col } from 'react-bootstrap';
import {Hand} from '../../components';
import { Card } from '../../models';
import './styles.css'

function Game() {
  const cards = []
  for (let i = 0; i < 10; i++){
    cards.push(new Card({letter: 'a', value: 10, inUse: true}))
  }
  return (
    <>
      <div className='title'>Quiddler Online</div>
      <div style={{height: "80 %"}}></div>
      <Container>
        <Row>
          <Hand
            cards={cards}
          />
        </Row>
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

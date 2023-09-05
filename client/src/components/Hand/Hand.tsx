import { Container, Row, Col } from 'react-bootstrap';
import GameCard from '../GameCard'
import './styles.css'
import { Card } from '../../models';

export interface HandProps {
  cards: Card[]
}

function Hand(props: HandProps) {

  const createGameCard = (card: Card, count: number) => {
    return (
      <div style={{width: '80px', marginRight: '-50px'}}>
        <GameCard letter={card.letter} value={card.value}/>
      </div>
    )
  }

  return (
    <Row >
      <Col xs="auto"></Col>
      <Col>
          <div className='Hand'>
            {props.cards.map((card, _, a) => {
              return createGameCard(card, a.length)
            })}
          </div>
      </Col>
      <Col xs="auto"></Col>
    </Row>
  );
}

export default Hand;

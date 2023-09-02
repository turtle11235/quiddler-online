import { Container, Row } from 'react-bootstrap';
import GameCard from '../GameCard'
import './styles.css'

function Hand(props: any) {

  return (
    <Container>
      <Row>
        {props.children}
      </Row>
    </Container>
  );
}

export default Hand;

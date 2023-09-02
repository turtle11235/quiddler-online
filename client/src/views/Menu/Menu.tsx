import { Container, Row, Button } from 'react-bootstrap';
import './styles.css'

function Menu() {
  return (
    <>
      <div className='title'>Quiddler Online</div>
      <Container>
        <Row>
          <Button>Host Game</Button>
        </Row>
        <Row>
          <Button>Join Game</Button>
        </Row>
        <Row>
          <Button>Settings</Button>
        </Row>
      </Container>
    </>
  );
}

export default Menu;

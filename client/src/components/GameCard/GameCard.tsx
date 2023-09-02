import { Card } from "react-bootstrap";
import './style.css'

type cardProps = {
  letter: string,
  value?: number
}

function GameCard(props : cardProps) {
  return (
    <Card className="GameCard">
      <Card.Title>{props.letter.toUpperCase()}</Card.Title>
      <Card.Subtitle>{props.value?.toString()}</Card.Subtitle>
    </Card>
  );
}

export default GameCard;

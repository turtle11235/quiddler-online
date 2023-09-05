import { Card } from "react-bootstrap";
import './style.css'

export interface cardProps {
  letter: string,
  value?: number
}

const GameCard = (props : cardProps) => {
  return (
    <Card className="GameCard">
      <Card.Title>{props.letter.toUpperCase()}</Card.Title>
      <Card.Subtitle>{props.value?.toString()}</Card.Subtitle>
    </Card>
  );
}

export default GameCard;

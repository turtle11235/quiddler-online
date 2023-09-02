interface CardProps {
  letter: string,
  value: number
  inUse?: boolean
}

export default class Card {
  
  letter: string;
  value: number;
  inUse: boolean;

  constructor(props: CardProps){
    this.letter = props.letter;
    this.value = props.value;
    this.inUse = props.inUse ? props.inUse : false;
  }
}
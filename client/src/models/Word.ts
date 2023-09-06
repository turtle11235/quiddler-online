import Card from './Card'

export interface WordProps {
  cards: Card[],
}

export default class Word {
  cards: Card[]
  value: number = 0
  length: number = 0

  constructor(props: WordProps){
    this.cards = props.cards;
    this.value = 0
    
    for (let i in this.cards){
      const card = this.cards[i];
      this.value += card.value;
      this.length += card.length
    }
  }

  addCard = (card: Card, i?: number) => {
    if (i === undefined || i === this.cards.length) {
      this.cards.push(card)
    }
    else if (i >= 0 && i < this.cards.length) {
      this.cards.splice(i, 0, card)
    }
    else {
      throw new Error("Invalid index for card. Value must be between 0 and cards.length")
    }

    this.value += card.value;
    this.length += card.length;
  }

  removeCard = (i: number) => {
    if (i < 0 || i >= this.cards.length){
      throw new Error("Invalid index for card. Value must be between 0 and cards.length")
    }

    this.value -= this.cards[i].value;
    this.length -= this.cards[i].length;

    this.cards.splice(i, 1);
  }

  moveCard = (start: number, end: number) => {
    const card = this.cards.splice(start, 1)[0]
    this.cards.splice(end, 0, card)
  }

  toString = () => {
    let s = ''
    for (let i in this.cards){
      this.string += this.cards[i].letter;
    }
    return s;
  }
}
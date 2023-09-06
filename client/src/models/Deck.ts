import Card from "./Card";
import defaultDistribution from "./card_distributions";


export default class Deck {
    allCards: Card[]
    drawCards: Card[]
    discardCards: Card[]

    constructor(allCards?: Card[]) {
        if (allCards) {
            this.allCards = allCards
        }
        else {
            this.allCards = []
            for (let i in defaultDistribution) {
                const [letter, value, count] = defaultDistribution[i]
                for (let j = 0; j < count; j++) {
                    this.allCards.push(new Card({letter: letter as string, value: value as number}))
                }
            }
        }
        this.drawCards = this.allCards
        this.discardCards = []
    }
}
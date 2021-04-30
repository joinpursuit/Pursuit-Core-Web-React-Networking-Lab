import React, { Component } from 'react'

export default class Hand extends Component {
    getFaceValue = (cardVal) => {
        const cardFaces = ["ACE", "JACK", "QUEEN", "KING"]
        if (!cardFaces.includes(cardVal)) return Number(cardVal)
        return cardVal === "ACE" ? 1 : 10
    }
    render() {
        const { deckId, hand, drawCards } = this.props
        const sum = hand.reduce((sum, card) => sum + this.getFaceValue(card.value), 0)
        const button = sum < 21 ? <button onClick={() => drawCards(deckId, 1)} id="hitme">Hit Me!</button> : ""
        const h1 = sum > 21 ? <h1>Busted</h1> : sum === 21 ? <h1>Blackjack!</h1> : ""
        return (
            <div>
                <h3>Deck ID: {deckId}</h3>
                <div>
                    {hand.map((card, i) => <img src={card.image} alt={`${card.value} of ${card.suit}`} key={i} />)}
                </div>
                {button}
                {h1}
            </div>
        )
    }
}

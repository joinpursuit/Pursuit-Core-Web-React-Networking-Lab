// import React, { Component } from 'react'
import React from "react";

export default function Hand({ deckId, hand, drawCards }) {

    const getTotalFaceValue = (cards) => {
        const faces = cards.map(card => card.value);
        const aces = faces.filter(card => card === "ACE");
        const rest = faces.filter(card => card !== "ACE");
        const valueTenCards = ["JACK", "QUEEN", "KING"];
        let sum = rest.reduce((total, val) => total + (valueTenCards.includes(val) ? 10 : Number(val)), 0);
        let count = aces.length;
        if (!count) return sum;
        sum += count;
        if (sum >= 21) return sum;
        for (let i = count; i > 0; i--) {
            if (sum + 10 > 21) return sum;
            if (sum + 10 === 21) return 21;
            sum += 10;
        }
        return sum;
    }

    const sum = getTotalFaceValue(hand);
    const h1 = sum > 21 ? <h1>Busted</h1> : sum === 21 ? <h1>Blackjack!</h1> : ""
    
    return (
        <div>
            <h3>Deck ID: {deckId}</h3>
            <div>
                {hand.map((card, i) => <img src={card.image} alt={`${card.value} of ${card.suit}`} key={i} />)}
            </div>
            {sum < 21 && <button onClick={() => drawCards(deckId, 1)} id="hitme">Hit Me!</button>}
            {h1}
        </div>
    )
}
/*
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
*/
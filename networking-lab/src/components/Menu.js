import React from 'react'

export default function Menu(props) {
    return (
        <div>
            <h2>Blackjack</h2>
            <div>Deck ID: {props.deckId}</div>
            <button
                onClick={props.touchCardsApi}>
                Generate Deck
            </button>
            <div>Input Existing Deck
                <input type='text'/>
                <button
                    onClick={props.touchCardsApi}>Draw</button>
            </div>
        </div>
    )
}

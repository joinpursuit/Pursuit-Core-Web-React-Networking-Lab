import React from 'react'
import "./hand.css"

export default function Hand(props) {
    return (
        <div className="cards">
            <p>Deck Id: {props.deckid}</p>
            {props.cards.map((card)=>{
                return(
                    <img src={card.imagen} alt={(card.suit, card.value)} key={card.code}/>
                )
            })}
            <button onClick={props.drawNewCard}>Hit me!</button>
        </div>
    )
}

import React from "react";

function Hand(props) {
       const {hand, deckId, hit}= props

    return (
        <>
        <h3>Deck Id: {deckId}</h3>
         {
         hand.map(card => 
         <img 
         src ={card.image} 
         key={card.code}>
         </img>)}
         <button onClick={hit}>Hit Me!</button>
        </>
    )
}

export default Hand;
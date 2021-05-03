import React from 'react'

export default function Hand(props) {
    const {deckId , userHand , drawCards} = props
    console.log(userHand)
    return (
        <div className="Hand">
            <p>Deck ID: {deckId}</p>
            <p>{userHand.map((card,i) => <img src={card.image} alt="" key={i}/>)}</p>
            <button onClick={()=> drawCards(deckId, 1)}>Hit Me</button>
            
        </div>
    )
}

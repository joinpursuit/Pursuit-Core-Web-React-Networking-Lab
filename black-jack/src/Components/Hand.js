import React from 'react'
import "./Hand.css"


function Hand(props) {
    return (
      
        <div className="wrapper">
        <div className ="cards">
        <h4>Declk Id: {props.deckId}</h4>
         {props.hand.map(card => <img src ={card.image} alt={card.suit + " " + card.value} key={card.code}></img>)}
         </div>
         <div className= "button"> 
         <button onClick={props.addToHand}>Hit Me!</button>
         </div>
        </div>
    )
}

export default Hand

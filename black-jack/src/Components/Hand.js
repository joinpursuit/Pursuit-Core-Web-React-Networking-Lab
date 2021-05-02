import React from 'react'
import "./Hand.css"



export default function Hand(props) {
    return (

        <div className="box">
        <div className ="cards">
        <p>Declk Id: {props.deckId}</p>
         {props.hand.map((card) => <img src ={card.image} alt={card.value + ' of ' + card.suit} key={card.code}></img>)}
         </div>
         <div className= "button"> 
         <button onClick={props.draw1}>Hit Me!</button>
         </div>
        </div>
    )
}


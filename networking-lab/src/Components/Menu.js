import React from 'react'
import "./menu.css"

export default function Menu(props) {
    
    return (
        <div className="menu">
            <button onClick={props.newDeck}>Generate Deck</button>
            <label>Input Existing Deck</label>
            <input type="text" value={props.deckid} onChange={props.handleBTn}></input>
            <button onClick={props.drawCard}>Draw</button>
        </div>
    )
}

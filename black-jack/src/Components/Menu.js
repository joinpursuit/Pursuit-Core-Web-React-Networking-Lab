import React from 'react'
import "./Menu.css"



export default function Menu(props) {
    return (
        <div>
            <button onClick={props.createDeck}>Generate Deck</button>
            <form onSubmit = {props.loadingDeck}> 
                <label htmlFor="input">Input Existing Deck</label>
                <input id = "input" type="text" onChange={props.handleChange}></input>
                <button type="submit">Draw</button>
            </form>
        </div>
    )
}


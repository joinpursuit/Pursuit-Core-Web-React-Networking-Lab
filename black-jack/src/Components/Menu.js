import React from 'react'
import "./Menu.css"

function Menu(props) {
    return (
        <div>
            <button onClick={props.generateDeck}>Generate Deck</button>
            <form onSubmit = {props.loadDeck}> 
            <label htmlFor="input">Input Existing Deck</label>
            <input id = "input" type="text" onChange={props.handleChange}></input>
            <button type="submit">Draw</button>
            </form>
        </div>
    )
}

export default Menu

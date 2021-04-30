import React from 'react'

function Menu(props) {
    const {start, changeValue, drawCard} = props
    return (
        <>
            <button onClick={start}>Generate Deck</button>
                <form onSubmit = {drawCard}> 
                    <label htmlFor="carddeckthing">Existing Deck</label><input id="carddeckthing" onChange={changeValue}></input>
                    <button type="submit">Draw A Card</button>
                </form>
        </>
    )
}

export default Menu
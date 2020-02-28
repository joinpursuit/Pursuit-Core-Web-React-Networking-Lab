import React from 'react';

const menu = ({gameDeckId, handleChange, newDeck, existingDeck}) => {
    return (
        <div>
            <div>
                <button onClick={newDeck}>Generate New Deck</button>
            </div>
            <form onSubmit={existingDeck}>
                <label> Use an Existing Deck:
                    <input type="text" name="gameDeckId" value={gameDeckId} placeholder="Enter Deck Id" onChange={handleChange}/>
                    <button type="submit">Submit Deck ID</button> 
                </label>
            </form>
        </div>
    )
}


export default menu
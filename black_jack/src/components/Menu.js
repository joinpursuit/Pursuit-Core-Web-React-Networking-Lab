import React from 'react'

const Menu = ({getdeck, drawFromID, handler}) => {
    // debugger
    return(
        <div>
            <h1>Black Jack</h1>
            <button onClick ={getdeck}>Generate Deck</button>
            <form onSubmit={drawFromID}>
                Existing Deck ID<input type="text" onChange={handler}/>
                <input type="submit" value="Draw"/>
           </form>
        </div>
       
    )

}

export default Menu


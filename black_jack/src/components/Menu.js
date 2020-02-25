import React from 'react'

const Menu = ({getdeck}) => {
    return(
       
        <div>
        <h1>Black Jack</h1>
        <button onClick = {getdeck}>Generate Deck</button>
        <form>
           Existing Deck ID<input type="text"/>
           <button >Draw</button>
           </form>
        </div>
       
    )

}

export default Menu


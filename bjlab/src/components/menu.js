import React, { Component } from 'react'
import axios from 'axios'

class Menu extends Component{
    state = {
        deck: "",

    }
    handleGenDeck= async(e)=>{
        e.preventDefault()

        let res = await axios.get('')
    }

    
    render(){

        return(
            
            <form action="submit" onSubmit={()=>this.props.handleSubmit()}>
                <button className="newDeck" onClick={this.handleGenDeck}>Generate new Deck</button>
                <label>
                input Existing Deck
                    <input type="text" value={this.state.deck}/>
                    <input type="submit" value="Draw" />
                </label>
                {/* <button className="draw">Draw</button> */}
            </form>
        )
    }
}

 export default Menu;
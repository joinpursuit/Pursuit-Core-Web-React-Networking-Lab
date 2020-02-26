import React, { Component } from 'react'
import axios from 'axios'

class Menu extends Component{
    state = {
        deck: "",

    }
    handleGenDeck= async(e)=>{
        e.preventDefault()
        try{

            let res = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
            this.setState({
                deck:res.data.deck_id
            })
        }catch(error){
            console.log( error);
            
        }
    }

    handleChange = (e) => {
        this.setState({
            deck: e.target.value
        });
    }

    
    render(){
        console.log(this.state)
        return(         
            <form action="submit" onSubmit={()=>this.props.handleSubmit(this.state.deck)}>
                <button className="newDeck" onClick={this.handleGenDeck}>Generate new Deck</button>
                <label>
                input Existing Deck
                    <input type="text" name="deck" value={this.state.deck} onChange={this.handleChange}/>
                    <input type="submit" value="Draw" />
                </label>
                {/* <button className="draw">Draw</button> */}
            </form>
        )
    }
}

 export default Menu;
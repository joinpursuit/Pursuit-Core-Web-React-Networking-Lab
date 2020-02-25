import React, {Component} from "react"
import axios from "axios"

class DeckOfCards extends Component{
    state={
        deck:""
    }

    fetchDeckOfCards = async()=>{
        try{
            let res = await axios.get("https://deckofcardsapi.com/api/deck/new/")
            let deck_id = res.data.deck_id
            this.setState({deck: deck_id})
            debugger
        }catch(err){
            console.log(err)
        }
    }


    render(){


        return(
            <div>
                <h1>Black Jack</h1>
                <button onClick={this.fetchDeckOfCards}>Get Deck Of Cards</button>
                <p> Deck Id: {this.state.deck} </p>
                <button onClick={this.drawCards}>Draw Cards</button>
            </div>
        )
    }
}

export default DeckOfCards
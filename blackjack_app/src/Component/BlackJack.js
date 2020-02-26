import React, { Component } from 'react'
import axios from 'axios';
import Cards from './Cards'


export class BlackJack extends Component {
    state = {
        deckId : ''
    }
    // componentDidMount(){

    // }
    generateDeckId = async () => {
        let res  = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6");
        this.setState({
            deckId: res.data.deck_id
        })
    
    }
    drawCards = async (e) =>{
        e.preventDefault()

        let res = await axios.get(`https://deckofcardsapi.com/api/deck/${e.target.elements[0].value}/draw/?count=2`)
        return res.data.cards.map((card)=>{
            return <Cards />
        })
            // debugger
            // key={card.image} image={card.image}

    }

    render() {
        console.log(this.state)
        const {deckId} = this.state
        return (
            <div>
                <button onClick={this.generateDeckId}>Generate Deck ID</button>
                <p>{deckId}</p>
                {/* <button onClick={Cards.this.getCards}>Draw Card</button> */}
                <form onSubmit={this.drawCards}>
                <input type="text" placeholder="Enter Deck Id" defaultValue=""></input>
                <button>Draw</button>
                </form>
            </div>
        )
    }
}

export default BlackJack

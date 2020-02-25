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

    render() {
        console.log(this.state)
        const {deckId} = this.state
        return (
            <div>
                <button onClick={this.generateDeckId}>Generate Deck ID</button>
                <p>{deckId}</p>
                <button onClick={Cards.this.getCards}>Draw Card</button>
                {/* <Cards deckId={deckId} /> */}
            </div>
        )
    }
}

export default BlackJack

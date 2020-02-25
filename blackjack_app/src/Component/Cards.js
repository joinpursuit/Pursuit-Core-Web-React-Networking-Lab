import React, { Component } from 'react';


export class Cards extends Component {
    state = {
        cardImg: [],
        count: 2
    }

    
    getCards = async (deckId, count) =>{
        let carUrl = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${count}`

        debugger
    }
    render() {
        debugger
        return (
            <div>
                {this.getCards(this.props.deckId, this.state.count)}
            </div>
        )
    }
}

export default Cards

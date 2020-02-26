import React from 'react'
import axios from 'axios'


class Hand extends React.Component {
    state = {
        hand: []
    }
    componentDidUpdate(prevProps) {
        const oldDeckId = prevProps.deckId;
        const newDeckId = this.props.deckId;

        if(oldDeckId !== newDeckId) {
            this.getHand(newDeckId);
        }
        
    }
    getHand = async(deckId) => {
        const handURL = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`
        try {
            let res = await axios.get(handURL)
            this.setState({hand: res.data.cards})
            // debugger
            
        } catch (error) {
            console.log();
            
        }
        
    }
    
    
    render() {
        let cardURL = this.state.hand.map(card => {
            return <img src={card.image} alt={""}></img>
        })
        return (
            <div>
                <button onClick= {this.getHand}>Get Hand</button>
                {cardURL}
            </div>
        )
    }
}

export default Hand;
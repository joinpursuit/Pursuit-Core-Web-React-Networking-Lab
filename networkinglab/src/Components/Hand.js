import React from 'react'
import axios from 'axios'
// import App from '../App'

class Hand extends React.Component {
    state = {
        hand: []
    }
    getHand = async(deckId) => {
        const handURL = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`
        try {
            let res = await axios.get(handURL)
            this.setState({hand: [res.data.message]})
            debugger
            

        } catch (error) {
            console.log();
            
        }
        
    }
    
    render() {
        return (
            <div>
                
                <button onClick= {this.getHand}>Get Hand</button>
                
            </div>
        )
    }
}

export default Hand;
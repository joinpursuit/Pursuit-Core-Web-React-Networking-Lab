import React from 'react'
import axios from 'axios'

class Menu extends React.Component {
    state = {
        deckId: ""
    }
    getDeckId = async() => {
        try {
            let res = await axios.get("https://deckofcardsapi.com/api/deck/new/")
            this.setState({deckId: res.data.deck_id})   
            // console.log(this.state.deckId);
            // debugger
            
        } catch (error) {
            this.setState({deckId: ""})
            console.log(error); 
        }
    }



render() {
    const { deckId } = this.state
    return (
        <div>
            {deckId}
            <button onClick={this.getDeckId}>Get Deck</button>

        </div>
    )
}
}

export default Menu;
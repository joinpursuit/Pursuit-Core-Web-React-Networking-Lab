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
        } catch (error) {
            this.setState({deckId: ""})
            console.log(error); 
        }
    }


render() {
    return (
        <div>
            <button onClick={this.getDeckId}>Get Deck</button>
        </div>
    )
}
}

export default Menu;
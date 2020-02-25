import React from 'react';
import axios from 'axios';

class Cards extends React.Component {
    state = {img: ""}

    getCardsPics = async () => {
        try{
            let res = await axios.get(`https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2`)
            debugger
        } catch(error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.getCardsPics}>Draw A Card</button>
            </div>
        )
    }


}



export default Cards;

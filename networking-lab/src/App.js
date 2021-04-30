import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      deck: [],
    };
  }

  touchCardsApi = async () => {
    try {
      const deck = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      console.log(deck.data)
      let draw_Seto_Kaiba = await axios.get(`https://deckofcardsapi.com/api/deck/${deck.data.deck_id}/draw/?count=1`)
      console.log(draw_Seto_Kaiba.data)
      
      
    } catch (err) {console.log(err)}
  }
  
  render() {
    
    return (
      <div>
        yo
        <button onClick={this.touchCardsApi}>click</button>
      </div>
    );
  }
  
}

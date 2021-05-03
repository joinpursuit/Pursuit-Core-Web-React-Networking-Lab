import React from 'react';
import Hand from './Components/Hand';
import Menu from './Components/Menu';
import axios from 'axios';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state={
        hand:[],
        deckId: ''
    }
  }

  getDeckID = async () => {
    try {
      let randomDeck = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      this.setState({
        deckId: randomDeck.data.deck_id
      })
    }
    catch { console.log('error') }
  }
  

  getHand = async() =>{
    try{ let drawHand = await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deck_id}/draw/?count=2`)
    this.setState({
      hand: this.state.hand.concat(drawHand.data.cards)
    })
  }
    catch{console.log('error')}
  }

  change
  render(){
    return (
      <div className="App">
        <Hand/>
        <Menu/>
      </div>
    );

  }
}

export default App;

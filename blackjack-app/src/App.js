import React, {Component} from 'react'
import './App.css';
import Hand from './components/Hand'
import Menu from './components/Menu'
import axios from 'axios'

class App extends Component {
  constructor() {
    super() 
      this.state = {
      deckId : "" ,
      userHand : [],
      }
      
    }

    cardsApi = async () => {
      const deck = await axios.get ("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      console.log(deck)
      const deckId = deck.data.deck_id
      this.drawCards(deckId, 2)
    }


    drawCards = async (id, count) => {
      const draw = await axios.get (`https://deckofcardsapi.com/api/deck/${id}/draw/?count=${count}`)
      this.setState ({
        deckId : id ,
        userHand : [...this.state.userHand, ...draw.data.cards]
      })
    }


  render() {

  return (
    <div className="App">
      <h1>Blackjack</h1>
      {this.state.deckId ?       
      <Hand
      deckId={this.state.deckId}
      userHand={this.state.userHand}
      drawCards={this.drawCards}/> :

      <Menu
      cardsApi={this.cardsApi}
      drawCards={this.drawCards}/>

      }

    </div>
  );
 }

}



export default App;

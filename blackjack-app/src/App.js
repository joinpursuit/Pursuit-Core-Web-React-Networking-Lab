import React, {Component} from 'react';
import axios from 'axios'
import Menu from "./Components/Menu"
import Fly21 from "./Components/BlackJackHand"
import './App.css';

class App extends Component {
  state = {
    gameDeckId: "",
    gameHand: [],
    gameInSession: false
  }
  newShuffledDeck = async () => {
    try {
      let res = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      if (!res) {throw res}
      this.setState({gameDeckId: res.data.deck_id})
      this.drawCard(this.state.gameDeckId)
    } catch (error) {
        return error
      } 
    }
  getExistingDeck = (event) => {
    event.preventDefault()
    this.setState({gameDeckId: event.target.value})
    this.drawCard(this.state.gameDeckId)
  }
  drawCard = async () => {
    try {
      let res = await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.gameDeckId}/draw/?count=1`)
      if (!res) {throw res}
      let card = res.data.cards
      this.setState(prevState => {
        return {
          gameHand: prevState.gameHand.concat(card),
          gameInSession: true  
        }
      })
    } catch (error) {
        return error
    } 
  }
  handleChange = event => {
    debugger
    this.setState({
        [event.target.name]: event.target.value
    })
  }
  render() {
    let {gameDeckId, gameHand, gameInSession} = this.state
    return (
      <div className="App">
        <h1>BLACKJACK ON CRACK</h1>
        {gameInSession ? <Fly21 gameDeckId={gameDeckId} hit={this.drawCard} images={gameHand} /> : <Menu gameDeckId={gameDeckId} handleChange={this.handleChange} newDeck={this.newShuffledDeck} existingDeck={this.getExistingDeck} />}
      </div>
    )
  }
}

export default App;
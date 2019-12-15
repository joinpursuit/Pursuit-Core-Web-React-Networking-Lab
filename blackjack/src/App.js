import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import Game from './Game';
import axios from 'axios';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      deckId: '',
      currentCards: [],
      areWeInGame: false
    }
  }

  startGame = async (deckcode) => {
    let response = await axios.get(`https://deckofcardsapi.com/api/deck/${deckcode}/draw/?count=2`);
    this.setState({
      deckId: response.data.deck_id,
      currentCards: response.data.cards,
      areWeInGame: true
    });
    console.log(response.data);
  }

  hitMe = async () => {
    let response = await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/?count=1`)
    let tempArr = this.state.currentCards;
    tempArr.push(response.data.cards[0]);
    this.setState({
      currentCards: tempArr
    })
  }

  render() {
    return(
      <div>
        <h1>BlackJack</h1>
        {(!this.state.areWeInGame) ? <Menu startGame={this.startGame} />:null}
        {this.state.areWeInGame ? <Game deckId={this.state.deckId} cards={this.state.currentCards} hitMe={this.hitMe} />:null}
      </div>)
  }
}
export default App;

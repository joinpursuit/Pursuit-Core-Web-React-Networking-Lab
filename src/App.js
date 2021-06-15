import React from "react";
import Menu from "./Menu.js";
import axios from "axios";
import Game from "./Game"

import "./App.css";

export default class App extends React.Component {
  state = {
    deckId: "",
    cards: [],
    showMenu:"",
    showGame:""
  };

  getDeck = async () => {
    try {
      const deck = await axios.get(
        "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
      );
      this.setState({ deckId: deck.data.deck_id });
      // debugger;
    } catch (error) {
      console.log(error);
    }
  };

  drawCard = async () => {
    // debugger;

    if (!this.state.deckId) {
      alert("missing deck ID");
    } else {
      try {
        const cards = await axios.get(
          `https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=2`
        );
        console.log(cards)
        this.setState({cards:cards.data.cards})
      } catch (error) {
        console.log(error);
      }
    }
  };

  hitMe = async () => {
      try {
        const card = await axios.get(
          `https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=1`
        );
        console.log(card)
        this.setState((prevState) => {
          
          return {cards:[...card.data.cards, ...prevState.cards]}})
      }
      catch (error) {
        console.log(error);
      }
    }
  
    componentDidUpdate (prevState) {
    }
  

  handleChange=(e)=>{
    this.setState({deckId: e.target.value})
  }

  render() {
    // debugger
    const { deckId, cards,showGame,showMenu } = this.state;
    return (
      <div className="app">
        <h1>Blackjack</h1>
        <Menu className={showMenu} getDeck={this.getDeck} drawCard={this.drawCard} handleChange={this.handleChange}/>
        <Game  className={showGame}deckID={deckId} cards={cards} hitMe={this.hitMe}/>
       
      </div>
    );
  }
}

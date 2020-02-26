import React, { Component } from "react";
import "./App.css";
import Menu from "./components/Menu.js";
import Hand from "./components/Hand.js";
import axios from "axios";

class App extends Component {
  state = {
    deck_id: "",
    cards: [],
    score: 0
  };

  generateDeck = async () => {
    try {
      let res = await axios.get(
        "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6"
      );
      await this.setState({ deck_id: res.data.deck_id });
    } catch (error) {
      await this.setState({ deck_id: "" });
      console.log(error);
    }
  };

  updateScore = () => {
    let score = 0;
    this.state.cards.forEach(card => {
      score += parseInt(card.value);
    });
    this.setState({
      score
    });
  };

  generateHand = async (deck_id, count) => {
    try {
      let res = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=${count}`
      );

      if (this.state.cards.length > 0) {
        this.setState(prevState => ({
          cards: [...prevState.cards, ...res.data.cards]
        }));
      } else {
        this.setState({ cards: res.data.cards });
      }
      this.updateScore();
    } catch (error) {
      this.setState({ cards: [] });
      console.log(error);
    }
  };

  handleSubmit = (e, deck_id) => {
    e.preventDefault();

    this.generateHand(deck_id, 2);
  };

  changeHandler = e => {
    this.setState({
      deck_id: e.target.value
    });
  };

  render() {
    const { deck_id, cards, score } = this.state;
    return (
      <div className="App">
        <h1>BlackJack</h1>
        <Menu
          generateDeck={this.generateDeck}
          generateHand={this.generateHand}
          handleSubmit={this.handleSubmit}
          changeHandler={this.changeHandler}
          deck_id={deck_id}
        />
        <Hand
          cards={cards}
          deck_id={deck_id}
          generateHand={this.generateHand}
          score={score}
        />
      </div>
    );
  }
}

export default App;

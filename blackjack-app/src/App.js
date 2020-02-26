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

  generateHand = async deck_id => {
    try {
      let res = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`
      );
      this.setState({ cards: res.data.cards });
    } catch (error) {
      this.setState({ cards: [] });
      console.log(error);
    }
  };

  handleSubmit = (e, deck_id) => {
    e.preventDefault();
    this.generateHand(deck_id);
  };

  changeHandler = e => {
    this.setState({
      deck_id: e.target.value
    });
  };

  hitMe = async deck_id => {
    let res = await axios.get(
      `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    );
    try {
      if (deck_id) {
        this.setState(prevState => {
          return {
            cards: [...prevState.cards, res.data.cards[0]]
          };
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { deck_id, cards } = this.state;
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
        <Hand cards={cards} deck_id={deck_id} hitMe={this.hitMe} />
      </div>
    );
  }
}

export default App;

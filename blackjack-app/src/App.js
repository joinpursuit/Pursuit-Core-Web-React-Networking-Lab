import React, { Component } from "react";
import "./App.css";
import Menu from "./components/Menu.js";
import Hand from "./components/Hand.js";
import axios from "axios";

class App extends Component {
  state = {
    deck_id: "",
    cards: [],
    rendered: ""
  };

  generateDeck = async () => {
    try {
      let res = await axios.get("https://deckofcardsapi.com/api/deck/new/");
      await this.setState({ deck_id: res.data.deck_id });
      debugger;
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

  handleSubmit = async (e, deck_id) => {
    e.preventDefault();
    await this.generateHand(deck_id);
  };

  render() {
    const { deck_id, cards } = this.state;
    return (
      <div className="App">
        <h1>BlackJack</h1>
        <Menu
          generateDeck={this.generateDeck}
          handleSubmit={this.handleSubmit}
          deck_id={deck_id}
        />
        <Hand cards={cards} />
      </div>
    );
  }
}

export default App;

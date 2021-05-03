import React, { Component } from "react";
import Menu from "./Components/Menu";
import Hand from "./Components/Hand";
import axios from "axios";
import "./App.css";
export default class App extends Component {
  constructor() {
    super();

    this.state = {
      deckId: "",
      hand: [],
      playing: false,
    };
  }

  handleChange = (event) => {
    this.setState({ deckId: event.target.value });
  };

  generateDeck = async () => {
    let getDeck = await axios.get(
      "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1",
    );
    this.setState({ deckId: getDeck.data.deck_id });
    this.drawTwoCards();
  };

  loadDeck = (event) => {
    event.preventDefault();
    this.drawTwoCards();
  };

  addToHand = async () => {
    let drawCards = await axios.get(
      `https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/?count=1`,
    );
    this.setState({ hand: this.state.hand.concat(drawCards.data.cards) });
  };

  drawTwoCards = async () => {
    this.setState({ playing: true });
    let drawCards = await axios.get(
      `https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/?count=2`,
    );
    drawCards.data.cards.forEach((card) => {
      this.setState({ hand: this.state.hand.concat(card) });
    });
  };

  render() {
    return (
      <div>
        <h1>Blackjack</h1>
        {this.state.playing ? (
          <Hand
            hand={this.state.hand}
            deckId={this.state.deckId}
            addToHand={this.addToHand}
          />
        ) : (
          <Menu
            generateDeck={this.generateDeck}
            handleChange={this.handleChange}
            loadDeck={this.loadDeck}
          />
        )}
      </div>
    );
  }
}

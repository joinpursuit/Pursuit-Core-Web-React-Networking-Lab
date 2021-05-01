import "./App.css";
import Menu from "./Menu";
import Hand from "./Hand";
import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      deckId: "",
      userHand: [],
      wannaplay: false,
    };
  }

  newDeck = async () => {
    try {
      this.setState({ wannaplay: true });
      axios.get("https://deckofcardsapi.com/api/deck/new/").then((response) => {
        this.setState({
          deckId: response.data.deck_id,
        });
        this.draw2Cards();
      });
    } catch {
      console.log("error");
    }
  };

  drawSingleCard = () => {
    try {
      let newState = [...this.state.userHand];
      axios
        .get(
          `https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/?count=1`
        )
        .then((res) => {
          newState.push(res.data.cards[0]);
          this.setState({
            userHand: newState,
          });
        });
    } catch {
      console.log("error");
    }
  };

  draw2Cards = async () => {
    try {
      this.setState({ wannaplay: true });
      let draw = await axios.get(
        `https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/?count=2`
      );
      draw.data.cards.forEach((card) => {
        this.setState({
          userHand: [...this.state.userHand, card],
        });
      });
    } catch {
      console.log("error");
    }
  };

  handleChange = (e) => {
    this.setState({ deckId: e.target.value });
  };
  render() {
    return (
      <div>
        <h1>Blackjack</h1>

        {this.state.wannaplay ? (
          <Hand
            addCards={this.drawSingleCard}
            userHand={this.state.userHand}
            deckId={this.state.deckId}
          />
        ) : (
          <Menu
            newDeck={this.newDeck}
            deckId={this.state.deckId}
            handleChange={this.handleChange}
            draw2Cards={this.draw2Cards}
          />
        )}
      </div>
    );
  }
}

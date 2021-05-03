import React, { Component } from "react";
import axios from "axios";

import Menu from "./components/Menu";
import Hand from "./components/Hand";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      deckId: "",
      cards: [],
    };
  }

  touchCardsApi = async () => {
    try {
      const deck = await axios.get(
        "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
      );
      return deck;
    } catch (err) {
      console.error(err);
    }
  };

  draw_Seto_Kaiba = async ({ touchCardsApi }) => {
    try {
      const draw = await axios.get(
        `https://deckofcardsapi.com/api/deck/${touchCardsApi.data.deck_id}/draw/?count=1`
      );

      const card = draw.data.cards[0].image;
      console.log("card", card);

      return this.setState({
        deckId: touchCardsApi.data.deck_id,
        cards: card,
      });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    const { deckId, cards } = this.state;

    return (
      <>
        <Menu
          deckId={deckId}
          cards={cards}
          touchCardsApi={this.touchCardsApi}
        />
        <Hand cards={cards} />
      </>
    );
  }
}

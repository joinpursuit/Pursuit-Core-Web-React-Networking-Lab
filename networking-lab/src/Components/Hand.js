import React, { Component } from "react";
import "./Hand.css";

export default class Hand extends Component {
  render() {
    const { deckId, hand, addToHand } = this.props;
    return (
      <div className="cards">
        <div>
          <h4>Deck Id: {deckId}</h4>
          {hand.map((card) => (
            <img
              src={card.image}
              alt={card.suit + " " + card.value}
              key={card.code}
            ></img>
          ))}
        </div>
        <div className="button">
          <button onClick={addToHand}>Hit Me!</button>
        </div>
      </div>
    );
  }
}

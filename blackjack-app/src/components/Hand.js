import React, { Component } from "react";
import Card from "./Card";

class Hand extends Component {
  render() {
    let displayCards = this.props.cards.map(card => {
      return <Card img={card.image} key={card} />;
    });
    return <div>{displayCards}</div>;
  }
}

export default Hand;

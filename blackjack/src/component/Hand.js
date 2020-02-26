import React from "react";
import Cardimg from "./Cardimg";

class Hand extends React.Component {
  state = {
    cards: []
  };

  render() {
    let cards = this.props.cards.map(card => {
      return <Cardimg src={card.image} key={card.value} value={card.value} />;
    });
    return <div>{cards}</div>;
  }
}

export default Hand;

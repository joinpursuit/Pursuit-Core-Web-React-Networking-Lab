import React from "react";
import Cardimg from "./Cardimg";

class Hand extends React.Component {
  state = {
    cards: []
  };

  render() {
    let cards = this.props.cards.map((card, i) => {
      return <Cardimg src={card.image} key={i} value={card.value} />;
    });
    return (
      <div>
        <h1>{this.props.deck_id}</h1>
        <button onClick={() => this.props.drawCard(this.props.deck_id)}>
          Draw Cards
        </button>
        {cards}
      </div>
    );
  }
}

export default Hand;

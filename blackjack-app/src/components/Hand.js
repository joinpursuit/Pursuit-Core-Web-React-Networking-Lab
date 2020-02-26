import React from "react";
import Card from "./Card";

const Hand = ({ cards, deck_id }) => {
  let displayCards = cards.map((card, i) => {
    return <Card img={card.image} key={i} />;
  });
  return (
    <div>
      <p>Deck id:{deck_id}</p>
      {displayCards}
    </div>
  );
};

export default Hand;

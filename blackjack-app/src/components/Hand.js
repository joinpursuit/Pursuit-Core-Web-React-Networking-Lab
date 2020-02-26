import React from "react";
import Card from "./Card";

const Hand = ({ cards }) => {
  let displayCards = cards.map(card => {
    return <Card img={card.image} key={card} />;
  });
  return <div>{displayCards}</div>;
};

export default Hand;

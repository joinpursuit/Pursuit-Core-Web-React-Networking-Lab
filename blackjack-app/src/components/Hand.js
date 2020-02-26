import React from "react";
import Card from "./Card";

const Hand = ({ cards, deck_id, hitMe }) => {
  let displayCards = cards.map((card, i) => {
    return <Card img={card.image} key={i} />;
  });
  let style = {
    display: "none"
  };
  if (cards.length !== 0) {
    style = {
      display: "block",
      textAlign: "center",
      marginLeft: "48.5%"
    };
  }
  return (
    <div className="hand-container">
      <p>Deck id: {deck_id}</p>
      <div>{displayCards}</div>
      <button id="hitMeBtn" style={style} onClick={() => hitMe(deck_id)}>
        Hit Me
      </button>
    </div>
  );
};

export default Hand;

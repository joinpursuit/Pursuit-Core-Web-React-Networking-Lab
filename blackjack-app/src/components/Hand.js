import React from "react";
import Card from "./Card";

const Hand = ({ cards, deck_id, generateHand, score }) => {
  let displayCards = cards.map(card => {
    return <Card img={card.image} key={card.value} />;
  });
  // console.log(displayCards);

  return (
    <div>
      <p>Deck id:{deck_id}</p>
      {displayCards.length !== 0 ? (
        <button onClick={() => generateHand(deck_id, 1)}>Hit me!</button>
      ) : null}
      <br></br>
      {displayCards.length !== 0 ? <p>Score:{score}</p> : null}

      {displayCards}
    </div>
  );
};

export default Hand;

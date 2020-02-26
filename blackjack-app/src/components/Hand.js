import React from "react";
import Card from "./Card";

const Hand = ({ cards, deck_id, generateHand }) => {
  let displayCards = cards.map(card => {
    return <Card img={card.image} key={card.value} />;
  });
  // console.log(displayCards);

  return (
    <div>
      <p>Deck id:{deck_id}</p>
      {displayCards.length !== 0 ? (
        <button
          onClick={async () => console.log(await generateHand(deck_id, 1))}
        >
          Hit me!
        </button>
      ) : null}
      <br></br>

      {displayCards}
    </div>
  );
};

export default Hand;

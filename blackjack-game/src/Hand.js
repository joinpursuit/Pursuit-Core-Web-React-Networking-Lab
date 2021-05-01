import React from "react";
import "./Hand.css";

export default function Hand(props) {
  return (
    <div className="cards">
      <p>Deck ID: {props.deckId}</p>
      {props.userHand.map((card) => {
        return (
          <img src={card.image} alt={(card.suit, card.value)} key={card.code} />
        );
      })}
      <button onClick={props.addCards}>Hit me!</button>
    </div>
  );
}

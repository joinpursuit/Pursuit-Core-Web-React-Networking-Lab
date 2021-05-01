import React from "react";
import "./Menu.css";

export default function Menu(props) {
  const button = !props.deckId ? (
    <button>Need deck Id</button>
  ) : (
    <button onClick={props.draw2Cards}>Draw</button>
  );
  return (
    <div className="menu">
      <button onClick={props.newDeck}>Generate Deck</button>
      <br />
      <label htmlFor="userinput">Input Existing Deck</label>
      <br />
      <input
        type="text"
        name="userinput"
        id="userinput"
        value={props.deckId}
        onChange={props.handleChange}
      />
      <br />
      {button}
    </div>
  );
}

import React, { Component } from "react";
import "./Menu.css";

export default class Menu extends Component {
  render() {
    const { generateDeck, loadDeck, handleChange } = this.props;
    return (
      <div>
        <button onClick={generateDeck}>Generate Deck</button>
        <form onSubmit={loadDeck}>
          <label htmlFor="input">Input Existing Deck: </label>
          <input id="input" type="text" onChange={handleChange}></input>
          <button type="submit">Draw</button>
        </form>
      </div>
    );
  }
}

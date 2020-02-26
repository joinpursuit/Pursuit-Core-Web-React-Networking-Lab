import React from "react";
import Cards from "./Cards";

class Menu extends React.Component {
  state = { deckId: "" };

  handleChange = e => {
    e.preventDefault();
    const { deckId } = this.state;
    // this.setState({ [e.target.parentNode.children[1].value]: e.target.value });
    this.setState({ deckId: e.target.value });
    debugger;
  };

  render() {
    return (
      <div>
        <label>Enter Deck ID: </label>
        <input value={this.state.deckId} onChange={this.handleChange}></input>
        <button onClick={this.handleChange}>Draw a Card</button>
      </div>
    );
  }
}

export default Menu;

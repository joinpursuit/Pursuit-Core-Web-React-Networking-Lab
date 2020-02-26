import React, { Component } from "react";

class Menu extends Component {
  render() {
    console.log(this.props);
    return (
      <div className={"Menu"}>
        <input
          type="button"
          onClick={this.props.generateDeck}
          value="Generate deck"
        />
        <form onSubmit={this.props.handleSubmit}>
          <h5>Input Existing Deck ID</h5>
          <input
            type="text"
            placeholder={this.props.deck_id}
            value={this.props.deck_id}
          ></input>
          <button>Draw</button>
        </form>
      </div>
    );
  }
}

export default Menu;

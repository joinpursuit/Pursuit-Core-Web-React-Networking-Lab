import React, { Component } from "react";

class Menu extends Component {
  render() {
    // console.log(this.props);
    return (
      <div className={"Menu"}>
        <input
          type="button"
          onClick={this.props.generateDeck}
          value="Generate deck"
        />
        <form onSubmit={e => this.props.handleSubmit(e, this.props.deck_id)}>
          <h5>Input Existing Deck ID</h5>
          <input
            onChange={this.props.changeHandler}
            type="text"
            placeholder="enter deck id"
            value={this.props.deck_id}
          ></input>
          <button>Draw</button>
        </form>
      </div>
    );
  }
}

export default Menu;

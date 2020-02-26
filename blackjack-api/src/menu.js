import React from "react";
// import Cards from "./Cards";
import axios from "axios";
import Card from "./cardImage";

class Menu extends React.Component {
  state = { deckId: "", cards: [] };

  handleChange = e => {
    e.preventDefault();
    // const { deckId } = this.state;
    // this.setState({ [e.target.parentNode.children[1].value]: e.target.value });
    this.setState({ deckId: e.target.value });
    // debugger;
  };

  userCards = async id => {
    id = this.state.deckId;
    console.log(id);
    try {
      let res = await axios.get(
        `https://deckofcardsapi.com/api/deck/${id}/draw/?count=2`
      );
      //   debugger;
      let cards = res.data.cards;
      this.setState({ cards: cards });
    } catch (error) {
      console.log(error);
      this.setState({ cards: [] });
    }
  };

  render() {
    let userCardPics = this.state.cards.map((el, index) => {
      return <Card img={el.image} key={index} />;
    });

    return (
      <div>
        {userCardPics}
        <label>Enter Deck ID: </label>
        <input value={this.state.deckId} onChange={this.handleChange}></input>
        <button onClick={this.userCards}>Draw a Card</button>
      </div>
    );
  }
}

export default Menu;

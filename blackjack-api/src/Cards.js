import React from "react";
import axios from "axios";
import Card from "./cardImage";

class Cards extends React.Component {
  state = { cards: [], numberOfCards: 2 };

  //maybe comp did mount and getimage fn

  getCardsPics = async () => {
    try {
      let res = await axios.get(
        `https://deckofcardsapi.com/api/deck/new/draw/?count=2`
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
    let cardPics = this.state.cards.map((el, index) => {
      return <Card img={el.image} key={index} />;
    });
    return (
      <div>
        {cardPics}
        <button onClick={this.getCardsPics}>Draw A Card</button>
      </div>
    );
  }
}

export default Cards;

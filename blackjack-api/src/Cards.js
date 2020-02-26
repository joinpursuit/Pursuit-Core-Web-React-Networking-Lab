import React from "react";
import axios from "axios";
import Card from "./cardImage";

class Cards extends React.Component {
  state = { img: "" };

  //maybe comp did mount and getimage fn

  getCardsPics = async () => {
    try {
      let res = await axios.get(
        `https://deckofcardsapi.com/api/deck/new/draw/?count=1`
      );
      // debugger
      this.setState({ img: res.data.cards[0].images.png });
      //   console.log(img);
    } catch (error) {
      console.log(error);
      this.setState({ img: "" });
    }
  };

  render() {
    return (
      <div>
        <Card img={this.state.img} />
        <button onClick={this.getCardsPics}>Draw A Card</button>
        {/* <img  */}
      </div>
    );
  }
}

export default Cards;

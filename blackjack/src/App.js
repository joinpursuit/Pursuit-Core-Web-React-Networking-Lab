import React from "react";
import Menu from "./component/Menu";
import axios from "axios";
import Hand from "./component/Hand";
import "./App.css";

class App extends React.Component {
  state = {
    deck_id: "",
    rendered: "menu",
    cards: []
  };

  drawCards = async e => {
    debugger;
    let deck_id = e;
    try {
      let res = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`
      );
      debugger;
      this.setState({ cards: res.data.cards });
    } catch (error) {
      console.log(error);
    }
  };
  generateDeck = async () => {
    try {
      let res = await axios.get(`https://deckofcardsapi.com/api/deck/new/`);

      this.setState({ deck_id: res.data.deck_id });
      this.drawCards(this.state.deck_id);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="App">
        <Menu
          rendered={this.state.rendered}
          drawCards={this.drawCards}
          generateDeck={this.generateDeck}
          deck_id={this.state.deck_id}
        />
        <Hand cards={this.state.cards} />
      </div>
    );
  }
}

export default App;

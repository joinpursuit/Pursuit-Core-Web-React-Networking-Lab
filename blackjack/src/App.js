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

  handleChange = e => {
    this.setState({ deck_id: e.target.value });
  };

  drawCards = async e => {
    let url = `https://deckofcardsapi.com/api/deck/${e}/draw/?count=2`;
    try {
      let res = await axios.get(url);
      debugger;
      this.setState({ cards: res.data.cards });
      this.setState({ rendered: "Hand" });
    } catch (error) {
      debugger;
      console.log(error);
    }
  };
  generateDeck = async () => {
    try {
      let res = await axios.get(
        `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`
      );

      this.setState({ deck_id: res.data.deck_id });

      this.drawCards(this.state.deck_id);
    } catch (error) {
      console.log(error);
    }
  };
  drawCard = async e => {
    let url = `https://deckofcardsapi.com/api/deck/${e}/draw/?count=1`;
    try {
      let res = await axios.get(url);
      debugger;
      this.setState(prevState => {
        return {
          cards: [...prevState.cards, res.data.cards]
        };
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    console.log(this.state.deck_id);
    if (this.state.rendered === "menu") {
      return (
        <div className="App">
          <Menu
            rendered={this.state.rendered}
            drawCards={this.drawCards}
            generateDeck={this.generateDeck}
            deck_id={this.state.deck_id}
            handleChange={this.handleChange}
          />
        </div>
      );
    } else {
      return (
        <div>
          <Hand
            cards={this.state.cards}
            drawCard={this.drawCard}
            deck_id={this.state.deck_id}
          />
        </div>
      );
    }
  }
}

export default App;

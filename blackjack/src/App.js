import React from 'react';
import Menu from './components/Menu';
import axios from 'axios';


class App extends React.Component {
  state = {deckId: "", currentCards: [], newGame: false}
  
  handleNewDeck() {
    this.getNewDeck();
  }
  getNewDeck = async () => {
    try {
      let res = await axios.get("https://deckofcardsapi.com/api/deck/new/");
      let deck_id = res.data.deck_id;
      this.setState({deckId: deck_id})
    } catch (err) {
      this.setState({deckId: ""});
      console.log(err);
    }
  }
  
  render() {
    return (
      <div className="App">
        <Menu />
        <button onClick={this.handleNewDeck}>Generate Deck</button>
      </div>
    );
  }
}

export default App;

import React from 'react';
import Menu from './Components/Menu';
import Hand from './Components/Hand';

import './App.css';

class App extends React.Component {
  state = {
    deckId: "",
    hand: []
  }

  handleSubmit(deck) {
    this.setState({
      deckId: deck
    })
    }
  
  handleGenerate(){
    this.setState({
      deckId:'random'
    })
  }

  render() {
    return (
      <div className="App">
        <Menu handleSubmit={this.handleSubmit}/>
        <Hand/>
      </div>
    );
  }
}

export default App;

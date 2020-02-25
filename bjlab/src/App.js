import React, { Component } from 'react';
//import './App.css';
import Menu from './components/menu'

class App extends Component {

    state =  { deckID: "",
              currentHand: [],
              }
  render(){

  
  return (
    <div className="App">
     <h1>BlackJack</h1>
      <Menu/>
    </div>
  );
  }
}

export default App;

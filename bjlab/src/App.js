import React, { Component } from 'react';
//import './App.css';
import Menu from './components/menu'
import GameScreen from "./components/GameScreen"

class App extends Component {

    state =  { deckID: "",
              currentHand: [],
              gamestart:false
              }
  render(){

  
  return (
    <div className="App">
     <h1>BlackJack</h1>
      !this.state.gamestart ? <Menu/>:<GameScreen/>
    </div>
  );
  }
}

export default App;

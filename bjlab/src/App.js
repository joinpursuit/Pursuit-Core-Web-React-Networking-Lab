import React, { Component } from 'react';
//import './App.css';
import Menu from './components/menu'
import GameScreen from "./components/GameScreen"

class App extends Component {

    state =  { deckID: "",
              currentHand: [],
              gamestart:false
              }

  handleSubmit=(deck)=>{
    // e.preventDefault()
    debugger
    this.setState({
      deckID:deck,
      gamestart:true
    })

  }
  render(){

  
  return (
    <div className="App">
     <h1>BlackJack</h1>
      {!this.state.gamestart ? <Menu handleSubmit={this.handleSubmit}/>:<GameScreen deckID={this.state.deckID}/>}
    </div>
  );
  }
}

export default App;

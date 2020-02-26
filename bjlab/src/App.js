import React, { Component } from 'react';
//import './App.css';
import Menu from './components/menu'
import GameScreen from "./components/GameScreen"

class App extends Component {

    state =  { deckID: "",
              gamestart:false
              }

  handleSubmit=(deckID)=>{
    this.setState({
      deckID,
      gamestart:true
    })

  }
  handleRestart=()=>{
    this.setState({
      gamestart:false
    })
  }
  render(){

  
  return (
    <div className="App">
     <h1>BlackJack</h1>
      {!this.state.gamestart ? <Menu handleSubmit={this.handleSubmit}/>:<GameScreen deckID={this.state.deckID} handleRestart={this.handleRestart}/>}
    </div>
  );
  }
}

export default App;

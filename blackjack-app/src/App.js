import React, {Component} from 'react'
import './App.css';
import Hand from './components/Hand'
import Menu from './components/Menu'

class App extends Component {
  constructor() {
    super() 
      this.state = {
      deckId : "" ,
      userHand : [],
      }
      
    }
  

  render() {

  return (
    <div className="App">
      <h1>Blackjack</h1>
      <Menu/>

    </div>
  );
 }

}



export default App;

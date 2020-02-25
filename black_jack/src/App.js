import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import axios from 'axios'
import Menu from "./components/Menu"



class App extends React.Component {
  state = {deckid: "", cards: []}


  componentDidUpdate(prevProps){
    debugger
  }

  getdeck = async () =>{
    try {
      let res = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      this.setState({deckid: res.data.deck_id})
      console.log(this.state.deckid)
    } catch (error) {
      console.log(error)
    }  
  }

  drawcard = async (deckid) => {
    try {
      let res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckid}/draw/?count=2`)
      debugger
      console.log(this.state.deckid)
    } catch (error) {
      console.log(error)
    }  
  }

  
  render(){
    
    return (
      <div className="App">
        <Menu getdeck = {this.getdeck} drawcard = {() => this.drawcard() }/>
      </div>
    );

  }
  
}

export default App;

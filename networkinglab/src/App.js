import React from 'react';
import axios from 'axios'
// import Menu from './Components/Menu'
import Hand from './Components/Hand'
// import logo from './logo.svg';
// import './App.css';

class App extends React.Component {
  state = {
    deckId: ""
  }
  getDeckId = async() => {
    try {
        let res = await axios.get("https://deckofcardsapi.com/api/deck/new/")
        this.setState({deckId: res.data.deck_id})   
        // console.log(this.state.deckId);
        // debugger
        
    } catch (error) {
        this.setState({deckId: ""})
        console.log(error); 
    }
  }
  handleId = (deckId) => {
        this.setState({ deckId })
  }
  
  
  render() {
    const { deckId } = this.state
    return (
      <div className="App">
      <button onClick={this.getDeckId}>Get Deck</button>
        {/* <Menu deckId={deckId} handleId={this.handleId}/> */}
        <Hand deckId={deckId}/>
        {deckId}
        
      </div>
    );
  }
}

export default App;

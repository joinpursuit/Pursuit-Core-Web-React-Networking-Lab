import React from 'react';
import Menu from './Components/Menu';
import Hand from './Components/Hand';
import axios from 'axios'

import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleGenerate = this.handleGenerate.bind(this)
    this.handleHit = this.handleHit.bind(this)
  }
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

  async handleHit(){
    let res = await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/?count=1`)
    this.setState(prevState=>({
      hand:[...prevState.hand,...res.data.cards]
    }))
    
  }
  async componentDidUpdate(){
    if(this.state.deckId === 'random'){
      let res =await axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
      this.setState (prevState=>({
        deckId: res.data.deck_id
      }))

      this.drawCards()
    } else if(!this.state.hand.length){
      let res =await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/?count=2`)
      this.setState (prevState=>({
        deckId: res.data.deck_id
      }))
      this.drawCards()
    }
  }

  async drawCards(){
    let res = await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/?count=2`)
    this.setState(prevState =>({
      hand: res.data.cards
    }))
 
  }

  render() {
    return (
      <div className="App">
        <Menu 
        handleSubmit={this.handleSubmit}
        handleGenerate={this.handleGenerate}
        deckId={this.state.deckId}
        />
        <Hand cards={this.state.hand} handleHit={this.handleHit}/>
      </div>
    );
  }
}

export default App;

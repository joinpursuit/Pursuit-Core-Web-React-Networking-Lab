import Menu from "./Components/Menu"
import Hand from "./Components/Hand"
import React, { Component } from 'react'
import axios from "axios"
import "./App.css"

export class App extends Component {
  constructor(){
    super()
    this.state = {
      deckId: "",
      hand: [],
      playing: false 
    }
  }

  generateDeck = async () => {
    try{
      let getDeck = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      this.setState({deckId: getDeck.data.deck_id})
      this.draw2()
    } catch{
      console.log("error")
    }
  }

  addToHand = async () => {
    try{
      let draw = await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/?count=1`)
      this.setState({hand: this.state.hand.concat(draw.data.cards)})
    } catch{
      console.log("error")
    }  
    }

  handleChange = (e) => {
    this.setState({deckId: e.target.value})
  }
  
  loadDeck = async (e) => {
    e.preventDefault()
    this.draw2()
  }

  draw2 = async () => {
    this.setState({playing:true})
    try{
      let draw = await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/?count=2`)
      draw.data.cards.forEach(card => {
      this.setState({hand: this.state.hand.concat(card)})
      });
    } catch{
      console.log("error")
    }
  }


  render() {
    return (
      <div className="app">
        <h1>Blackjack</h1>
        {this.state.playing ?   
        
        <Hand 
        hand = {this.state.hand}
        deckId = {this.state.deckId}
        addToHand = {this.addToHand}
        /> 
        
        :

        <Menu 
        generateDeck = {this.generateDeck}
        handleChange = {this.handleChange}
        loadDeck = {this.loadDeck}
        />
        }
      </div>
    )
  }
}

export default App

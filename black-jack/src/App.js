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
      playCondition: false 
    }
  }

  createDeck = async () => {
    try{
      let newDeck = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      this.setState({deckId: newDeck.data.deck_id})
      this.draw2()
    } catch{
      console.log("error")
    }
  }
  draw2 = async () => {
    this.setState({playCondition:true})
    try{
      let draw = await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/?count=2`)
      draw.data.cards.forEach(card => {
      this.setState({
          hand: [...this.state.hand, card]})
      });
    } catch{
      console.log("error")
    }
  }
  draw1 = async () => {
    try{
      let draw = await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/?count=1`)
      this.setState({
          hand: [...this.state.hand, draw.data.cards]})
    } catch{
      console.log("error")
    }  
    }

  handleChange = (e) => {
    this.setState({deckId: e.target.value})
  }

  loadingDeck = async (e) => {
    e.preventDefault()
    this.draw2()
  }




  render() {
    return (
      <div className="app">
        <h1>Blackjack</h1>
        {this.state.playCondition ?  

        <Hand 
        hand = {this.state.hand}
        deckId = {this.state.deckId}
        draw1 = {this.draw1}
        /> 

        :

        <Menu 
        generateDeck = {this.createDeck}
        handleChange = {this.handleChange}
        loadingDeck = {this.loadingDeck}
        />
        }
      </div>
    )
  }
}

export default App
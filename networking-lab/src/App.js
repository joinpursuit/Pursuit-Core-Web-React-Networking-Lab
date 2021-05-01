import React, { Component } from 'react'
import Menu from "./Components/Menu.js"
import Hand from "./Components/Hand.js"
import axios from 'axios'





export default class App extends Component {
  constructor(){
    super()
    this.state ={
      deckid: "",
      cards: []
    }
  }
   deckSelect = async ()=>{
     axios.get('https://deckofcardsapi.com/api/deck/new/')
     .then(response => {
       console.log(response.data.deck_id)
       this.setState({
         deckid: response.data.deck_id
       })
       this.drawCard()
     })
   }
   drawCard=async()=>{
     let draw = await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckid}/draw/?count=2`)
     draw.data.cards.forEach(ele=> {
       this.setState({
         cards: [...this.state.cards, ele]
       })
     });
   }

   drawNewCard =  () =>{
     let newCard = [...this.state.cards]
     axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckid}/draw/?count=1`)
     .then(card =>{
       newCard.push(card.data.cards[0])
       this.setState({
         cards: newCard
       })
     })
   }
   handleBTn = (e)=>{
     this.setState({
       deckid: e.target.value
     })
   }
  
  render() {
    
    return (
      <div>
        <h1>Blackjack</h1>
        <Menu 
          newDeck={this.deckSelect}
          deckid={this.state.deckid}
          handleBTn={this.handleBTn}
          drawCard={this.drawCard}/>
        <Hand 
          drawNewCard={this.drawNewCard}
          deckid={this.state.deckid}
          cards={this.state.cards}/>
      </div>
    )
  }
}


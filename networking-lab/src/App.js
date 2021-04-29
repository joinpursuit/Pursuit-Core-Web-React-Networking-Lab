import React, { Component } from 'react'
import Menu from "./Components/Menu.js"
import Hand from "./Components/Hand.js"
import axios from 'axios'




export default class App extends Component {
  constructor(){
    super()
    this.state ={
      cards: []
    }
  }
   cardSelect = ()=>{
     axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
     .then(response => {
       console.log(response.data)
      //  this.setState({
      //    cards: response.data
      //  })
     })
   }

  render() {
    return (
      <div>
        <h1>Blackjack</h1>
        <Menu />
        <Hand />
      </div>
    )
  }
}


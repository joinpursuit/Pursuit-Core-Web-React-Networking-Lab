import './App.css';
import Hand from './components/Hand'
import Menu from './components/Menu'
import axios from 'axios'

import React, { Component } from 'react'

class App extends Component {

  constructor() {
    super()

    this.state = {

    }
  }

  getDeck = async () => {
    const deck = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle')
    console.log(deck.data.deck_id)
  }

  render() {
    return (
      <div>
        <Menu />
        <Hand />
      </div>
    )
  }

  componentDidMount() {
    this.getDeck()
  }
}

export default App
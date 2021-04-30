import React, { Component } from 'react'
import Menu from './components/Menu'
import Game from './components/Game'
import axios from 'axios'
import './App.css'

export class App extends Component {
  constructor () {
    super()
    this.state = {
      deckId: '',
      hand: [],
      playing: false
    }
  }

  generateDeck = async () => {
    let newDeck = await axios.get(
      'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
    )
    this.setState({
      deckId: newDeck.data.deck_id
    })
    this.drawTwo()
  }

  drawTwo = async () => {
    this.setState({
      playing: true
    })

    let draw = await axios.get(
      `https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/?count=2`
    )
    draw.data.cards.map(card => {
      this.setState({
        hand: this.state.hand.concat(card)
      })
    })
  }

  drawOne = async () => {
    let drawOne = await axios.get(
      `https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/?count=1`
    )
    this.setState({
      hand: this.state.hand.concat(drawOne.data.cards)
    })
  }

  loadDeck = e => {
    e.preventDefault()
    this.drawTwo()
  }

  handleChange = e => {
    this.setState({
      deckId: e.target.value
    })
  }

  render () {
    return (
      <div className='dot'>
        <div className='border'>
          <div>
            <h1 contenteditable spellcheck='false'>
              Blackjack
            </h1>
            {this.state.playing ? (
              <Game
                deckId={this.state.deckId}
                hand={this.state.hand}
                drawOne={this.drawOne}
              />
            ) : (
              <Menu
                generateDeck={this.generateDeck}
                loadDeck={this.loadDeck}
                handleChange={this.handleChange}
              />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App

import React, { Component } from 'react'
import axios from 'axios'

class Menu extends Component {
	constructor() {
		super()

      this.state = {
         cardOne: '',
         cardTwo: '',
         deckID: ''

      }
	}

   componentDidMount() {
      console.log('update')
      this.getCards()
   }

   // getCardImage = () => {
   //    console.log('on click')
   //    axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=2').then((res)=>{
   //       this.setState({
   //             imgURL: res.data.cards[0].image,
   //             imgURL1: res.data.cards[1].image
               
   //       })
   //    })
   // }

   getCards = async () => {
      let drawCard = await axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=2')
      this.setState({
         cardOne: drawCard.data.cards[0].image,
         cardTwo: drawCard.data.cards[1].image,
         deckID: drawCard.data.deck_id
      })
   }


	render() {
		return (
			<div>
				<h1>Black Jack</h1>
				<button onClick={this.getCards}>Generate Deck</button>
				<br />

				<label htmlFor=''>Input Existing Deck</label>
				<input type='text' />
            <p>{this.state.deckID}</p>

				<button onClick={this.getCards}>Draw</button>
				<br />
				<img src={this.state.cardOne} alt='' />
				<img src={this.state.cardTwo} alt='' />
				<br />
				<button>Hit me!</button>
			</div>
		)
	}
}

export default Menu

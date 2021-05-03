import React, { Component } from 'react'
import axios from 'axios'

export class Menu extends Component {
    constructor(){
        super()

        this.state = {
            imgURL: []
        }
    }

    componentDidMount(){
        this.getCardImage()
    }

    getCardImage = () => {
        axios.get(`https://deckofcardsapi.com/api/deck/new/draw/?count=2`).then(res => {
            this.setState({ 
                imgURL: res.data.cards[0].image
            })
        })
    }

    render() {
        return (
            <div>
                <h1>BlackJack</h1>
                <button>Generate Deck</button>
                <label>Input Existing Deck</label>
                <input type="text"></input>
                <button onClick={this.getCardImage}>Draw</button>
                <img src={this.state.imgURL} alt="card"></img>
            </div>
        )
    }
}

export default Menu

import React, { Component } from 'react'
import Menu from "./Menu"
import Hand from "./Hand"
import axios from 'axios'
import "./Blackjack.css"

export default class Blackjack extends Component {
    constructor() {
        super()
        this.state = {
            deckId: "",
            hand: [],
            errorMsg: ""
        }
    }
    getNewDeck = async () => {
        try {
            const response = await axios("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6")
            if(!response.data.success) return this.setState({ errorMsg: "It was not successful to get a new deck." })
            const deckId = response.data.deck_id
            this.drawCards(deckId, 2)
        } catch (err) {
            this.setState({ errorMsg: `Oops, something went wrong, please try again later!` })
        }
    }
    drawCards = async (id, cardCount) => {
        try {
            const response = await axios(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=${cardCount}`)
            if(!response.data.success) return this.setState({ errorMsg: `It was not successful to draw the card${cardCount > 1 ? "s" : ""}.` })
            const { hand } = this.state
            hand.push(...response.data.cards)
            this.setState({ deckId: id, hand, errorMsg: "" })
        } catch (err) {
            this.setState({ errorMsg: `Deck ${id} is not a valid ID, please try again!` })
        }
    }
    render() {
        const { deckId, hand, errorMsg } = this.state
        return (
            <div className="blackjack">
                <h1>Blackjack</h1>
                {deckId  ?  <Hand
                                deckId={deckId}
                                hand={hand}
                                drawCards={this.drawCards}
                            />
                         :  <Menu
                                errorMsg={errorMsg}
                                getNewDeck={this.getNewDeck}
                                drawCards={this.drawCards}
                            />
                }
            </div>
        )
    }
}

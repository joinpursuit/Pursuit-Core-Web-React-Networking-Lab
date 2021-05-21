// import React, { Component } from 'react'
import React, { useState } from "react";
import Menu from "./Menu"
import Hand from "./Hand"
import axios from 'axios'
import "./Blackjack.css"

export default function Blackjack() {
    const [ deckId, setDeckId ] = useState("");
    const [ hand, setHand ] = useState([]);
    const [ errorMsg, setErrorMsg ] = useState("");
    
    const getNewDeck = async () => {
        try {
            const { data } = await axios("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6");
            if(!data.success) return setErrorMsg("It was not successful to get a new deck.");
            drawCards(data.deck_id, 2);
        } catch (err) {
            setErrorMsg(`Oops, something went wrong, please try again later!`);
        }
    }

    const drawCards = async (id, cardCount) => {
        try {
            const { data } = await axios(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=${cardCount}`);
            if(!data.success) return setErrorMsg(`It was not successful to draw the card${cardCount > 1 ? "s" : ""}.`);
            setDeckId(id);
            setHand([...hand, ...data.cards]);
            setErrorMsg("");
        } catch (err) {
            setErrorMsg(`Deck ${id} is not a valid ID, please try again!`);
        }
    }

    return (
        <div className="blackjack">
            <h1>Blackjack</h1>
            {deckId ? <Hand
                            deckId={deckId}
                            hand={hand}
                            drawCards={drawCards}
                        />
                    :  <Menu
                            errorMsg={errorMsg}
                            getNewDeck={getNewDeck}
                            drawCards={drawCards}
                        />
            }
        </div>
    )
}
/*
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
*/
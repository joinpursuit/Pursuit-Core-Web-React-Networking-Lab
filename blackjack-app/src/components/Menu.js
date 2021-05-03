import React, { Component } from 'react'

export default class Menu extends Component {
    constructor(){
        super()
        this.state = {deckInput : "" }
    }

    handleChange = (e) => {
        this.setState ({
            deckInput : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.drawCards(this.state.deckInput, 2)
        this.setState ({deckInput : "" })
    }

    render() {

        const {cardsApi} = this.props
    
        return (
            <div className="Menu">
    
            <button onClick={cardsApi}>Generate Deck</button>
            <form onSubmit={this.handleSubmit}>
            <label>Input Existing Deck</label>
            <input type="text" onChange={this.handleChange} value={this.state.deckInput}></input>
            <button>Draw</button>
            </form>
    
                
            </div>
        )
}
}
import React, { Component } from 'react'

export default class Menu extends Component {
    constructor() {
        super()
        this.state = { existingId: "" }
    }
    newDeckSubmit = (e) => {
        e.preventDefault()
        this.props.getNewDeck()
    }
    existingDeckSubmit = (e) => {
        e.preventDefault()
        this.props.drawCards(this.state.existingId, 2)
        this.setState({ existingId: "" })
    }
    handleDeckIdInput = (e) => {
        this.setState({ existingId: e.target.value })
    }
    render() {
        const { existingId } = this.state
        return (
          <div>
            <form onSubmit={this.newDeckSubmit}>
                <button>Generate Deck</button>
            </form>
            <form onSubmit={this.existingDeckSubmit}>
                <label htmlFor="existingDeck">Input Existing Deck</label>
                <input
                    type="text"
                    name="existingDeck"
                    id="existingDeck"
                    value={existingId}
                    onChange={this.handleDeckIdInput}
                />
                <input type="submit" value="Draw" />
            </form>
            <p id="error">{this.props.errorMsg}</p>
          </div>
        )
    }
}

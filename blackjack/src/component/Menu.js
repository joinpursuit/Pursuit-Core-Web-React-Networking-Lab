import React from 'react';

class Menu extends React.Component {
    
    

    render() {
        return(
            <div>
                <h1>Blackjack</h1>
                <button onClick={this.props.generateDeck}>Generate Deck</button>
                <form>
                    <label>
                        Input Existing Deck
                        <input type="text"></input>
                    </label>
                    <button onClick={this.props.drawCards}>Draw</button>
                </form>
            </div>
        )
    }
};

export default Menu;
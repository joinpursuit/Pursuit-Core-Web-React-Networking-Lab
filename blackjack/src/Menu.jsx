import React from 'react';

class Menu extends React.Component {

	constructor(props){
		super();
		this.state = {
			deckCode: ''
		}
	}
	newGame = () => {
		this.props.startGame('new');
	}

	joinGame = (e) => {
		this.props.startGame(this.state.deckCode);
	}

	handleChange = (e) => {
		this.setState({
			deckCode: e.target.value
		});
	}



	render(){
	return (
		<div>
			<button onClick={this.newGame}>Generate Deck</button>
			<p>Input Existing Deck<input onChange={this.handleChange} type='text' /><button onClick={this.joinGame}>Draw</button></p>
		</div>);
	}	
}




export default Menu;
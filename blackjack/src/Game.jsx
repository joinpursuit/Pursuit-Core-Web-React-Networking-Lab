import React from 'react';


const Game = (props) => {
	let cardImgs = props.cards.map((elem) => {
			return (<img alt={elem.code} src={elem.image} />);
		});
	return (
		<div>
			<h3>Deck Id: {props.deckId}</h3>
			{cardImgs}
			<div><button onClick={props.hitMe}>Hit Me!</button></div>
		</div>
	);
}
export default Game;
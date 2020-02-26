import React from 'react';


const Hand = (props) => {
	let cardImgs = props.cards.map((el) => {
			return (<img alt={el.code} src={el.image} />);
		});
	return (
		<div>
			<h3>Deck Id: {props.deckId}</h3>
			{cardImgs}
			<div><button onClick={props.hitMe}>Hit Me!</button></div>
		</div>
	);
}
export default Hand;
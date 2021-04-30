import React from 'react'

function Game (props) {
  return (
    <div>
      <h4>Deck ID: {props.deckId}</h4>
      {props.hand.map(card => {
        return (
          <img src={card.image} alt={card.suit + card.value} key={card.code} />
        )
      })}
      <br />
      <button onClick={props.drawOne}>Hit Me!</button>
    </div>
  )
}

export default Game

import React from 'react';
import Card from './Card'
class Hand extends React.Component{
  render(){
    let {cards}= this.props
    let hand = cards.map(card =>{
      return(
        <Card 
        imag={card.image}
        value={card.value}
        key={card.code}
        />
      )
      
    })

    if(hand.length){
      return(
        <div>
          <ul>
            {hand}
          </ul>
          <button onClick={(e)=>this.props.handleHit(e)}>Hit Me</button>
        </div>
      )
    }
    return(
      <div>

      </div>
    )
  };
}

export default Hand;

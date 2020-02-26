import React from 'react';

class Menu extends React.Component{

  render(){
    if(this.props.deckId && this.props.deckId !=='random'){
      return(
      <p>Deck Id: {this.props.deckId}</p>
      )
    }
    return(

    <div>
     <button onClick={this.props.handleGenerate}>Generate Deck</button> 
      <form onSubmit={(e)=>{
        e.preventDefault()
        this.props.handleSubmit(e.target.children[1].value)
      }
     }>
     <label htmlFor='existing'>Input existing Deck: </label>
     <input type="text" name="existing"></input>
     <button type='submit'>Draw</button>
     </form>
    </div>
    )
  };
}


export default Menu;

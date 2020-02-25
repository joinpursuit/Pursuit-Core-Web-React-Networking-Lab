import React from 'react';

class Menu extends React.Component{

  render(){
    return(

    <div>
     <button onClick={this.props.handleGenerate}>Generate Deck</button> 
      <form onSubmit={(e)=>{
        e.preventDefault()
        this.props.handleSubmit(e.target.children[1].value)
      }
     }>
     <label for='existing'>Input existing Deck: </label>
     <input type="text" name="existing"></input>
     <button type='submit'>Draw</button>
     </form>
    </div>
    )
  };
}


export default Menu;

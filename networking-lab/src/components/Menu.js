import React from 'react'

function Menu (props) {
  return (
    <div className='neonMenu'>
      <button onClick={props.generateDeck}>Generate Deck</button>
      <br />
      <form onSubmit={props.loadDeck}>
        <label htmlFor='input'>
          <sub>Input Existing Dec</sub>
        </label>
        <br />
        <input type='text' id='input' onChange={props.handleChange} />
        <br />
        <button type='submit'>Draw</button>
      </form>
    </div>
  )
}

export default Menu

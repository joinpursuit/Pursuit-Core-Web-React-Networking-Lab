import React from 'react';

const Card = ({imag, value}) =>{
  return (
    <li value={value}>
      <img src={imag} alt='card'/>
    </li>
  )
}


export default Card
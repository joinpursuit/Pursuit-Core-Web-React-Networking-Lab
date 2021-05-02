import React from 'react'

export default function Hand(props) {
    console.log(props.card)
    return <img
        src={props.cards}
        alt='Playing Card' />
}

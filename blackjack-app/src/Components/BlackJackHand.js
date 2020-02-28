import React from 'react';
import CardImages from "./CardImage"


const fly21 = ({gameDeckId, hit, images}) => {
    let cardImages = images.map(image => {
        return <CardImages src={image.image} key={image.code}/>
    })
    return (
        <div>
            <h2>DECK ID: {gameDeckId}</h2>
            {cardImages}
            <button onClick={hit}>HIT EM UP</button>
        </div>
    )
}


export default fly21
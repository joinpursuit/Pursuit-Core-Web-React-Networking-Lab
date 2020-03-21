
import React, { useState, useEffect } from 'react'
import axios from "axios"

const DrawCard =({deckID})=> {
    const [hand,setHand]=useState([])

    const fetchCard = async(numberCard)=>{
        if(!hand){
            let res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=${numberCard}`)
            setHand(res.data.cards) 
        }else{
            let res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=${numberCard}`)
            setHand(hand=>[...hand,...res.data.cards]) 
        }
    }

    useEffect(() => {
        fetchCard(2)
      }, []);

    const showCards =hand.map(card=>{
        debugger
        return (
        <div>
        <img src={card.image} key={card.code}  alt={card.code} point={card.value}></img>
        
        </div>)

    })
    
        return (
            <div>
                {showCards}
                <button onClick={()=>fetchCard(1)}>Hit Me</button>
                <button>Stay</button>
            </div>
        )
    }

export default DrawCard

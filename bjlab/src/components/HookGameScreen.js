import React, { Component, useState, useEffect } from 'react'
import axios from 'axios'

 const GameScreen = ({deckID}) => {
     const [currentHand, setCurrentHand] = useState([]);
     const [currentScore, setCurrentScore] = useState(0);
     const [bust, setBust] = useState(false);

    const handleScore = () => {
        let aceCounter = 0
        let newScore = 0
        currentHand.forEach(card=>{
            debugger
            newScore += parseFloat(card.value)
        })
        if(newScore>21){
            setBust(true);
          setCurrentScore(newScore)
        }else{
            setBust(true)
            setCurrentScore(newScore)          
        }
    }
    const handleDraw= async()=>{   
        try{            
            let drawnCards = await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=${currentHand.length >= 2 ? 1 : 2}`)
            debugger
            let newCards = drawnCards.data.cards
            setCurrentHand(prevHand=>[...prevHand,...newCards])
            handleScore()
        }catch(error){
            console.log(error)
        }

    }

    useEffect(() => {
        handleDraw()
    }, []);
  

        let cardImg = currentHand.map((card,i)=>{
            return<img src={card.image} key={i} alt={""}/>
        })
        return(
            <div>
                <p>deck:{deckID}</p>
                {cardImg}
                <button type="button" onClick={handleDraw}>Hit me </button>
            </div>
        )

}

export default GameScreen

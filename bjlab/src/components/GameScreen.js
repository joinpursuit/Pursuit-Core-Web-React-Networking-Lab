import React, { Component } from 'react'
import axios from 'axios'

class GameScreen extends Component {
    state={
        currentHand:[],
        currentScore:0
    }

    handleDraw= async()=>{
        
        try{
            const deckID=this.props.deckID
            
            let drawnCards = await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=${this.state.currentHand.length>=2?1:2}`)
            debugger
            let newCards = drawnCards.data.cards
            this.setState(prevState=>{
                return{
                    currentHand:[...prevState.currentHand,...newCards]
                }
            })


        }catch(error){
            console.log(error)
        }

    }
    componentDidMount(){
        this.handleDraw()
    }
    render(){
        console.log(this.state)
        let cardImg= this.state.currentHand.map((card,i)=>{
            return<img src={card.image} key={i} alt={""}/>
        })
        return(
            <div>
                <p>deck:{this.props.deckID}</p>
                {cardImg}
                <button type="button" onClick={this.handleDraw}>Hit me </button>
            </div>
        )

    }
}

export default GameScreen
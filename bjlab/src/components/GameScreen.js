import React, { Component} from 'react'
import axios from 'axios'

class GameScreen extends Component {
    state={
        currentHand:[],
        currentScore:0,
        bust:false,
        gameOver:false
    }
    handleScore = () => {
        let aceCounter = 0
        let newScore = 0
        this.state.currentHand.forEach(card=>{
            if(card.value === "ACE" ){
                aceCounter += 1
                newScore +=11

            } else if (card.value ==="KING"||card.value ==="QUEEN"||card.value ==="JACK"){
                newScore +=10
            }else{

                newScore += parseFloat(card.value)
            }
        })

        while(newScore>21 && aceCounter>0){
            newScore -=10
            aceCounter -=1
        }
        if(newScore>21){
            this.setState({
                bust:true,
                currentScore:newScore,
                gameOver:true
            })
        }else{
            this.setState({
                currentScore:newScore
            })
        }
    }
    handleDraw= async()=>{
        
        try{
            const deckID = this.props.deckID
            
            let drawnCards = await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=${this.state.currentHand.length >= 2 ? 1 : 2}`)
            let newCards = drawnCards.data.cards
            this.setState(prevState=>{
                return{
                    currentHand:[...prevState.currentHand,...newCards]
                }
            })

            this.handleScore()


        }catch(error){
            console.log(error)
        }

    }
    componentDidMount(){
        this.handleDraw()
    }
    render(){
        console.log(this.state)
        let cardImg = this.state.currentHand.map((card,i)=>{
            return<img src={card.image} key={i} alt={""}/>
        })
        return(
            <div>
                <p>deck:{this.props.deckID}</p>
                {cardImg}
                <button type="button" onClick={this.handleDraw} hidden={this.state.gameOver}>Hit me </button>
                <p> current Hand {this.state.currentScore}</p>
                {this.state.gameOver?<button onClick={()=>this.props.handleRestart()}>restart</button>:""}
            </div>
        )

    }
}

export default GameScreen
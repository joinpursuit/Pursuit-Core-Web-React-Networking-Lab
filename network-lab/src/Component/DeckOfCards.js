import React, {Component} from "react"
import axios from "axios"
import Cards from "./Cards"

class DeckOfCards extends Component{
    state={
        deck:"",
        cards:[]
    }

    componentDidMount(){
        this.fetchDeckOfCards();
    }

    fetchDeckOfCards = async()=>{
        try{
            let res = await axios.get("https://deckofcardsapi.com/api/deck/new/")
            this.setState({deck: res.data.deck_id})
        }catch(err){
            this.setState({deck: ""})
            console.log(err)
        }
    }
    
    
    
    drawCards = async (deck)=>{
        deck = this.state.deck
        try{
            let res = await axios.get(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=2`)
            this.setState({cards:res.data.cards})
        }catch(err){
            this.setState({cards: []})
            console.log(err)
        }
    }
         

    render(){
        let userHand = this.state.cards.map(card=>{
            return <Cards img={card.image} key={card}/>
        })
        return(
            <div>
                <h1>Black Jack</h1>
                <button onClick={this.fetchDeckOfCards}>Get Deck Of Cards</button>
                <p> Deck Id: {this.state.deck} </p>
                <button onClick={this.drawCards}>Draw Cards</button>
                
                {/* <p> {this.state.cards}</p> */}
            <div>
                {userHand}
            </div>
            </div>
        )
    }
}

export default DeckOfCards

// put deck in new component
// import deck of cards to deck
// link the deck ids
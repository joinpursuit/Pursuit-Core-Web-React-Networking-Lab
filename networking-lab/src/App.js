import './App.css';
import axios from 'axios';
import Menu from './Menu';
import Hand from './Hand';

export class App extends Component {
  constructor(){
    super()
    this.state = {
      deckId: "",
      hand: [],
      theGame: false 
    }
  }

  start = async () => {
    try{
      let randomDeck = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      this.setState({deckId: randomDeck.data.deck_id})
      this.drawCard()
    } catch{
      console.log("error")
    }
  }

  hit = async () => {
    try{
      let draw = await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/?count=1`)
      this.setState({
        hand: this.state.hand.concat(draw.data.cards)
      })
    } catch{
      console.log("error")
    }  
    }

  changeValue = (e) => {
    this.setState({
      deckId: e.target.value
    })
  }

  drawCard = async (e) => {
    e.preventDefault()
    this.setState({theGame:true})
    try{
      let drawACardFromDeck = await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/?count=2`)
      drawACardFromDeck.data.cards.forEach(card => {
      this.setState({
        hand: this.state.hand.concat(card)
      })
      });
    } catch{
      console.log("error try again")
    }
  }


  render() {
    return (
      <>
        <h2>Blackjack</h2>
        {this.state.theGame ?  <Hand hand = {this.state.hand} deckId = {this.state.deckId} hit = {this.hit}/> : <Menu start = {this.start} changeValue = {this.changeValue} drawCard = {this.drawCard}/>}
      </>
    )
  }
}

export default App;

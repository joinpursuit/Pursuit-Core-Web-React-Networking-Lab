import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import axios from 'axios';
import Menu from './components/Menu';
import Hand from './components/Hand';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {deckid: "", cards: [], completed: true}
  }


  getdeck = async () =>{
    try {
      let res = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      this.setState({deckid: res.data.deck_id})
      this.drawcard(this.state.deckid)
      console.log(this.state.deckid)
    } catch (error) {
      console.log(error)
    }  
  }

  drawcard = async (deckid, num = 2) => {
    try {
      let res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckid}/draw/?count=${num}`)
      let cardArr = res.data.cards
      this.setState({cards:cardArr, completed:false})
    } catch (error) {
      console.log(error)
    }  
  }

  drawFromID = (e) => {
    e.preventDefault();
    this.drawcard(this.state.deckid)
    debugger
  }

  handler = e => {
    this.setState({deckid: e.target.value})
  }

  
  render(){
    let { deckid, cards, completed } = this.state
    let cardImage = cards.map(card =>{
      return <Hand img={card.image} key={card.value}/>
  })
    return (
      <div className="App">
        {completed ? <Menu getdeck = {this.getdeck} drawFromID = {this.drawFromID} handler = {this.handler}/> : <div className="Cards"> <h1>Black Jack</h1> <p>Deck ID: {deckid}</p> <button onClick={() => this.drawcard(deckid, 1)}>Hit Me</button> </div>}
        {cardImage}
      </div>
    );

  }
  
}

export default App;

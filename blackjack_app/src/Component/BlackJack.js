// import React, { Component } from 'react'
// import axios from 'axios';
// import Cards from './Cards'


// export class BlackJack extends Component {
//     state = {
//         deckId : '',
//         cards:[]
//     }
//     // componentDidMount(){

//     // }
//     generateDeckId = async () => {
//         let res  = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6");
//         this.setState({
//             deckId: res.data.deck_id
//         })
    
//     }
//     drawCards = async (e) =>{
//         e.preventDefault()
//         try {
//             let res = await axios.get(`https://deckofcardsapi.com/api/deck/${e.target.elements[0].value}/draw/?count=2`)
//             this.setState({
//                 cards:res.data.cards
//             }) 

//         } catch (error) {
//             alert(error)
//         }

//     }

//     handleChange =(e)=>{
//         this.setState({
//             deckId:e.target.value
//         })
//         // console.log(e.target.value)
//     }

//     render() {
//         console.log(this.state)
//         const {deckId,cards} = this.state
//         return (
//             <div>
//                 <button onClick={this.generateDeckId}>Generate Deck ID</button>
//                 <p>{deckId}</p>
//                 {/* <button onClick={Cards.this.getCards}>Draw Card</button> */}
//                 <form onSubmit={this.drawCards}>
//                 <input type="text" placeholder="Enter Deck Id" value={this.state.deckId} onChange={this.handleChange}/>
//                 <button type="submit">Draw</button>
//                 </form>
//                 <Cards cards={cards}/>
//             </div>
//         )
//     }
// }

// export default BlackJack

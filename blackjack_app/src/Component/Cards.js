import React, { Component } from 'react'

export class Cards extends Component {

    state={
        groupofCard:["https://www.gamblingsites.com/wp-content/uploads/2019/01/Blackjack.png"]
    }

    displayCard(){
        return this.state.groupofCard.map((link)=>{
            // debugger
            return <img key={link} src={link} alt="BlackJackCode"></img>
        })
    }
    // componentDidMount(){
    //     this.setState({groupofCard:this.props.cards})
    //     debugger
    // }

    componentDidMount(prevProps){
        let oldImg = prevProps.groupofCard
        let newImg = this.props.cards
        if(oldImg!==newImg){
            this.displayCard(...prevProps.groupofCard,newImg)
        }
    }
    

    render() {

        console.log(this.props)
        console.log(this.state)
        // this.setState({imgLink:this.props.cards})

        return (
            <div>
                {this.displayCard()}
            </div>
        )
    }
}

export default Cards

import React, { Component } from 'react'

export class Cards extends Component {

    state={
        imgLink:["https://www.legitgamblingsites.com/wp-content/uploads/2018/04/blackjack-double-down1-1024x499.jpg","https://www.legitgamblingsites.com/wp-content/uploads/2018/04/blackjack-double-down1-1024x499.jpg"]
    }

    displayCard(){
        // debugger

        return this.state.imgLink.map((link)=>{
            // debugger
            return <img key={link++} src={link} alt="BlackJackCode"></img>
        })
    }
    componentDidMount(){
        this.setState({imgLink:this.props.cards})
        // debugger
    }

    componentWillUpdate(prevProps){
        let oldImg = prevProps.imgLink
        let newImg = this.props.cards
        if(oldImg!==newImg){
            this.displayCard({imgLink:this.props.cards})
        }
        debugger
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

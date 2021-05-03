import React, { Component } from 'react'
import Menu from "./Components/Menu"
import Hand from "./Components/Hand"


export class App extends Component {
  constructor(){
    super()

    this.state = {
      imgURL: 0,
    }
  }

  // handleDraw = () => {

  // }

  render() {
    return (
      <div>
        <Menu />
        <Hand />
      </div>
    )
  }
}

export default App


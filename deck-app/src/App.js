import React, { Component } from 'react'
import Menu from './Components/Menu'
import Hand from './Components/Hand'

class App extends Component {
	constructor() {
		super()
	}

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

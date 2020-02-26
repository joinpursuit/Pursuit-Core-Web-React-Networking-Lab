import React, {Component} from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {
  state = {
    gameInSession = "false"
  }
  componentDidMount() {

  }
  render() {
    return (
      <div className="App">
        {gameInSession ? <Cards /> : <Menu />}
      </div>
    )
  }
}

export default App;

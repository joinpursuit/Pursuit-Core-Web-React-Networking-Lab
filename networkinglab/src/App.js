import React from 'react';
import Menu from './Components/Menu'
import Hand from './Components/Hand'
// import logo from './logo.svg';
// import './App.css';

class App extends React.Component {
  state = {
    deckId: ""
  }
  handleId = (deckId) => {
    this.setState({ deckId })
  }
  render() {
    const { deckId } = this.state
    return (
      <div className="App">
        <Menu deckId={deckId} handleId={this.handleId}/>
        <Hand/>
        
      </div>
    );
  }
}

export default App;

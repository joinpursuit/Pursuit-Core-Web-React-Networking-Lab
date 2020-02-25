import React from 'react';
import Menu from './Components/Menu'
import Hand from './Components/Hand'
// import logo from './logo.svg';
// import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Menu/>
        <Hand/>
        
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import Cards from './Cards'
import CardSelector from './CardSelector'

class App extends React.Component {

  state = ""

  render() {

    return (
      <div className="App">
        <Cards/>
        <CardSelector/>
      </div>
    );

  }
}

export default App;

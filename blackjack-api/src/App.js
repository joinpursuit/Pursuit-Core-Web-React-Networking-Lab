import React from 'react';
import './App.css';
import Cards from './Cards'
import CardSelector from './CardSelector'
import Header from './Header'

class App extends React.Component {

  state = ""

  render() {

    return (
      <div className="App">
        <Header/>
        <Cards/>
        <CardSelector/>
      </div>
    );

  }
}

export default App;

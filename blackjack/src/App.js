import React from 'react';
import Menu from './component/Menu';
// import Hand from './component/Hand';
import './App.css';

class App extends React.Component {
  state = {
    deck_id: "",
    rendered: "menu"
  }
  
  render() {
    return (
      <div className="App">
        <Menu rendered={this.state.rendered}/>
        {/* <Hand /> */}
      </div>
    );
  }
}

export default App;

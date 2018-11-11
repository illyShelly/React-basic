import React, { Component } from 'react';
// import './App.css';
import Ninjas from './Ninjas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My First React app!</h1>
        <p>Welcome ;)</p>
        {/* nesting component Ninjas */}
        {/* creating props and passing to child component Ninjas.js */}
        <Ninjas name="Ryu" age="30" belt="black"/>
        <Ninjas name="Yoshi" age="28" belt="green"/>
      </div>
    );
  }
}

export default App;

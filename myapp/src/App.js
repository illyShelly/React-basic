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
        <Ninjas />
      </div>
    );
  }
}

export default App;

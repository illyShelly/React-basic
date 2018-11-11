import React, { Component } from 'react';
// import './App.css';
import Ninjas from './Ninjas';

class App extends Component {
  state = {
    // passing array of ninjas - of objects
    ninjas: [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 25, belt: 'green', id: 2 },
      { name: '', age: 20, belt: 'pink', id: 3 }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My First React app!</h1>
        <p>Welcome ;)</p>
        {/* nesting component Ninjas */}
        {/* creating props and passing to child component Ninjas.js */}
        {/* creating state object and passing property props */}
        {/* referencing ninjas array of props */}
        <Ninjas ninjas={ this.state.ninjas }/>
      </div>
    );
  }
}

export default App;

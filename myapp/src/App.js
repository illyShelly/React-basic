import React, { Component } from 'react';
// import './App.css';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';
// added AddNinja.js

class App extends Component {
  state = {
    // passing array of ninjas - of objects
    ninjas: [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 25, belt: 'green', id: 2 },
      { name: '', age: 20, belt: 'pink', id: 3 }
    ]
  }
  // create function to push the data from AddNinja state to array; arrow fce with parameter - that new Ninja - object like this e.x.: { name: 'Ryu', age: 30, belt: 'black', id: 1 }
  addNinja = (objectnewninja) => {
    // line 19 from AddNinja.js - props goes as parameter
    // console.log(ninja);
    objectnewninja.id = Math.random();
    // add new ninja with id to the state
      // this line will change the state directly without using setState method - bad practice
    // this.ninjas.push(ninja);
    // using SPREAD OPERATOR - create new updated ABOVE array + parameter ninja from fce
    let newninjas = [...this.state.ninjas, objectnewninja]
    this.setState({
      // ninjas key with value of new array newninjas
      ninjas: newninjas
    })
  }
  // we want pass that fce as prop to the Ninjas component
  // we want this fce fire to this component
  // the prop will be deleteNinja={this.deleteninja} line 42
  deleteNinja = (id) => {
    // console.log(id);
    // filter certain items creating new array
    let ninjasId = this.state.ninjas.filter(ninja => {
      // value is true or false - is param id equal to ninjas id
      // if is true that id are different - stay in new array
      return ninja.id !== id
    });
    this.setState({
      ninjas: ninjasId
    })
  }
  render() {
    return (
      <div className="App">
        <h1>My First React app!</h1>
        <p>Welcome ;)</p>
        <Ninjas deleteNinja={ this.deleteNinja } ninjas={ this.state.ninjas }/>
        {/* add new file AddNinja.js component */}
        {/* is called from AddNinja.js handleSubmit fce */}
        <AddNinja addNinja={ this.addNinja }/>
      </div>
    );
  }
}

export default App;

// nesting component Ninjas
// creating props and passing to child component Ninjas.js
// creating state object and passing property props
// referencing ninjas array of props
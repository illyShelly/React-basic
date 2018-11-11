import React, { Component } from 'react'
import App from './App';

class AddNinja extends Component {
  state = {
    name: null,
    age: null,
    belt: null
  }
  // grap id and differentiate when 1 fce for all inputs
      // ninja.name < = > ninja['name']
  //setState update default state
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    // we pass fce addNinja fce in App.js line 17
    this.props.addNinja(this.state);
    // console.log(this.state);
  }
  render() {
    return (
      <div>
        {/* onSubmit - grab enter and button press */}
        {/* do not forget KEYWORD this */}
        <form onSubmit={ this.handleSubmit}>
          {/* look for input field with id of name */}
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={ this.handleChange } />
          <label htmlFor="name">Age:</label>
          <input type="text" id="age" onChange={ this.handleChange} />
          <label htmlFor="name">Belt:</label>
          <input type="text" id="belt" onChange={ this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default AddNinja;
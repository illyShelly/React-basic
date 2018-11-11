import React, { Component } from 'react';

// now we import React so its not React.create.Component...
// promps pass data from parent component to child component(app.js to Ninjas.js)
class Ninjas extends Component {
    render() {
        // props inside render method
        // {name: "Ryu", age: "30", belt: "black"}
        // console.log(this.props);
        const { name, age, belt} = this.props;
        // this.props.name putting to div instead
        return(
            <div className="ninja">
            <div>Name: { name }</div>
            <div>Age: { age }</div>
            <div>Belt: { belt }</div>
        </div>
        )
    }
}

export default Ninjas;
import React, { Component } from 'react';

// now we import React so its not React.create.Component...
// promps pass data from parent component to child component(app.js to Ninjas.js)
class Ninjas extends Component {
    render() {
        // props inside render method
        // {name: "Ryu", age: "30", belt: "black"}
        // console.log(this.props);
        // const { name, age, belt} = this.props;
            // this.props.name putting to div instead
        // storing array name ninjas in const
        const { ninjas } = this.props;
        // const ninjas = this.props.ninjas; the same
        // using map array
        const ninjaList = ninjas.map(ninja => {
            return (
                // adding key as id of each Ninja
                <div className="ninja" key={ ninja.id}>
                <div>Name: { ninja.name }</div>
                <div>Age: { ninja.age }</div>
                <div>Belt: { ninja.belt }</div>
                </div>
            )
        })
        return(
            <div className="ninja-list">
                { ninjaList }
            </div>
        )
    }
}

export default Ninjas;
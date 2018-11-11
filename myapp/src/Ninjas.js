import React, { Component } from 'react';

// now we import React so its not React.create.Component...
class Ninjas extends Component {
    render() {
        return(
            <div className="ninja">
            <div>Name: Ryu</div>
            <div>Age: 30</div>
            <div>Belt: Black</div>
        </div>
        )
    }
}

export default Ninjas;
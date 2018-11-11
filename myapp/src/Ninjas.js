import React from 'react';

// now we import React so its not React.create.Component...
// promps pass data from parent component to child component(app.js to Ninjas.js)
// WE do not need CLASS COMPONENT when does not have its STATE, receives data from props container component App.js
// so we turn to FUNCTIONAL COMPONENT - UI interest us
    //do not need render method-just for class based component, just JS6
    // run error undefined - it not passed ARGUMENT to reach all the props
    // do not need KEYWORD.this
    // can pass {ninjas} as parameter instead const = props;
const Ninjas = ({ ninjas }) => {
        // storing array name ninjas in const
        // const { ninjas } = props;
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

export default Ninjas;
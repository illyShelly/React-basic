import React from 'react';

// FUNCTIONAL COMPONENT - UI interest us
    //do not need render method-just for class based component, just JS6
    // run error undefined - it not passed ARGUMENT to reach all the props
    // do not need KEYWORD.this
    // can pass {ninjas} as parameter instead const = props;
const Ninjas = ({ ninjas }) => {
        // storing array name ninjas in const
        // const { ninjas } = props;
        // using map array
        // const ninjaList = ninjas.map(ninja => {
        //     // passing if/else statement
        //     if(ninja.age > 20) {
        //         return (
        //             // adding key as id of each Ninja
        //             <div className="ninja" key={ ninja.id}>
        //             <div>Name: { ninja.name }</div>
        //             <div>Age: { ninja.age }</div>
        //             <div>Belt: { ninja.belt }</div>
        //             </div>
        //         )
        //     }
        //     else {
        //         return null;
        //     }
        // })
        const ninjaList = ninjas.map(ninja => {
            // condition ? (true) : (false) = ternary operator
            return ninja.age > 20 ? (
                <div className="ninja" key={ ninja.id}>
                <div>Name: { ninja.name }</div>
                <div>Age: { ninja.age }</div>
                <div>Belt: { ninja.belt }</div>
                </div>
            ) : null;
        })
        return(
            <div className="ninja-list">
                { ninjaList }
            </div>
        )
}

export default Ninjas;
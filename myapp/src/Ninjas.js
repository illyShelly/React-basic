import React from 'react';

// FUNCTIONAL COMPONENT - UI interest us
    // can pass {ninjas} as parameter instead const { ninjas }= props;
const Ninjas = ({ ninjas }) => {
    const ninjaList = ninjas.map(ninja => {
        if(ninja.age > 20) {
            return (
                // adding key as id of each Ninja
                <div className="ninja" key={ ninja.id}>
                <div>Name: { ninja.name }</div>
                <div>Age: { ninja.age }</div>
                <div>Belt: { ninja.belt }</div>
                </div>
            )
        } else {
            return null;
        }
    })

    return(
        <div className="ninja-list">
            { ninjaList }
        </div>
    )
}

export default Ninjas;
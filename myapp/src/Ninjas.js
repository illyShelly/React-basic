import React from 'react';

// FUNCTIONAL COMPONENT - UI interest us
    // can pass {ninjas} as parameter instead const { ninjas }= props;
// added new prop to component - deleteNinja
    // add button for that
const Ninjas = ({ ninjas, deleteNinja }) => {
    const ninjaList = ninjas.map(ninja => {
        if(ninja.age > 20) {
            return (
                // adding key as id of each Ninja
                <div className="ninja" key={ ninja.id}>
                <div>Name: { ninja.name }</div>
                <div>Age: { ninja.age }</div>
                <div>Belt: { ninja.belt }</div>
                {/* to not invoke with param this fce we use anonymous fce double {} */}
                <button onClick={() => { deleteNinja(ninja.id)} }>Delete ninja</button>
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
import React from 'react';
import './Ninjas.css'

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
                <div className="ninja-item">Name: { ninja.name }</div>
                <div className="ninja-item">Age: { ninja.age }</div>
                <div className="ninja-item">Belt: { ninja.belt }</div>
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
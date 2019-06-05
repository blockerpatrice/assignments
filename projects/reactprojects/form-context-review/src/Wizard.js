import React from 'react'

const Wizard = (props) => {
    const { name, isAlive } = props
    return (
        <div>
            <h1>{name}</h1>
            <p>Is Alive: {isAlive.toString()}</p>
        </div>
    )
}

export default Wizard
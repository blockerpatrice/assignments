import React from 'react'

const Person = (props) => {
    console.log(props);

    return(
        <div className='person'>{props.name}</div>
    )
}

export default Person;
import React from 'react';
import './App.css';
import Person from './Person';

const Main = () => {
    const myFriend ={
        name: 'Pat',
        occupation:'developer',
        favColor:'blue'
    }

    return (
        <div className='main-container'>
            <Person name={myFriend.name}/>
        </div>
    )
}

export default Main;
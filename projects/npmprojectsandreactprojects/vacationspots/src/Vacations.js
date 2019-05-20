import React from 'react';

const Vacations = (props) =>{
  console.log(props);
  let{place, price, timeToGo} = props.place;
  
    return (
        <div id="cards">
            <h1 id="h1">{place}</h1>
            <h3>Price: {price}</h3>
            <h3>Time To Go: {timeToGo}</h3>
        </div>
    )
}

export default Vacations;
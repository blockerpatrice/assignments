import React from 'react';

const Movie=(props) =>{
    console.log(props);
    return (
          <div>
              <h1>{props.title}</h1>
          </div>
          
      )
}
export default Movie;
import React from 'react';

const Square=(props) =>{
    console.log(props);
    return (
          <div style={{background: props.color}}>
              <div></div>
          </div>
          
      )
}
export default Square;
import React from 'react';
import Vacations from './Vacations.js'

const VacaContainer = () => {
    let vacationSpots = [
        {
          place: "Meridian, Idaho",
          price: 40,
          timeToGo: "Spring"
        },{
          place: "Cancun",
          price: 900,
          timeToGo: "Winter"
        },{
          place: "China",
          price: 1200,
          timeToGo: "Fall"
        },{
          place: "Russia",
          price: 1100,
          timeToGo: "Summer"
        },{
          place: "Lebanon",
          price: 400,
          timeToGo: "Spring"
        }
      ]
    
    const mappedInfo = vacationSpots.map((spots) => {
      return <Vacations place = {spots} />;
    })
    
    return (
      <div>
          {mappedInfo};
      </div>
    )
}

export default VacaContainer;


import React from 'react';

class Person extends React.Component{
  constructor(){
    super();

    this.state = {
      name: "Patrice",
      occupation: "Developer",
      favColor: "blue"
    }

    this.updateState = this.updateState.bind(this);
  }

  updateColor(){
    this.setState({favColor:'name updated'});
  }
  updateOccupation(){
    this.setState({occupation:'occupation updated'})
  }
   

  render(){
    return (
      <div>
        <h1>{this.state}</h1>
        <button onClick = {this.updateState}> Updates color & Occupation</button>
        <h2>{this.state.occupation}</h2>
        <h2>{this.state.favColor}></h2>
      </div>
    )
  }
}

export default Person;

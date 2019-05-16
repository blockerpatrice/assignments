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
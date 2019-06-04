import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import Geo from './Geo';
//lat and long are passed directly to Submit since I'm not able to pass to provider because
//of google export


export class MapsApiCall extends Component {
  render() {
    return (
      <div><Geo/></div>
    )    
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA_KD2KYN4r2TCgsp4O_n1lR7Fv9jQAzVU'
})(Geo);


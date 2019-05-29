import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import Geosuggest from 'react-geosuggest';


export class Geo extends Component {
    

  render() {
    return (
        <div>
            <Geosuggest 
                placeholder="Input place of birth" 
                autoComplete="true"
                onSuggestSelect={this.onSuggestSelect}
            />
            
        </div>
    );
  }

  onSuggestSelect(suggest){
    console.log(suggest);
}
  
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyA_KD2KYN4r2TCgsp4O_n1lR7Fv9jQAzVU'
})(Geo);
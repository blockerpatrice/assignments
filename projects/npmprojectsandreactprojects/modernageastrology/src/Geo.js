import Geosuggest from 'react-geosuggest';
import React from 'react';
import {data} from './Provider';



class Geo extends React.Component{

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
      
    onSuggestSelect = (suggest) => {
        this.props.saveLong(Math.trunc(suggest.location.lng));
        this.props.saveLat(Math.trunc(suggest.location.lat)); 
    }
}

export default data(Geo);
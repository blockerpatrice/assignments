import React from 'react';
import {data} from './Provider';
import Wheel from './WheelComponent';
let sdkClient = require('./Sdk');


class Chart extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            ascendant:'',
            Varna:'',
            Vashya:'',
            Yoni:'',
            Gan:'',
            Nadi:'',
            SignLord:'',
            sign:'',
            Naksahtra:'',
            NaksahtraLord:'',
            Charan:'',
            Yog:'',
            Karan:'',
            Tithi:'',
            yunja:'',
            tatva:'',
            name_alphabet:'',
            paya:''
        }
    }

    

    componentDidMount(){
    //componentWillMount is called before initial rendering
   
        let setter = this;
        let resource = "astro_details";
    
        console.log(this.props.date, this.props.month, this.props.year, this.props.hour, this.props.minute, this.props.latitude, this.props.longitude, this.props.timezone)
        
        sdkClient.call(resource, this.props.date, this.props.month, this.props.year, this.props.hour, this.props.minute, this.props.latitude, this.props.longitude, this.props.timezone, function(error, result){
            
            if(error)
            {
                console.log("Error returned!!");
            }
            else
            {
                console.log('Response has arrived from API server --');
                console.log(result);   
                setter.setState({ascendant:result.ascendant});
                setter.setState({Naksahtra:result.Naksahtra});
                setter.setState({NaksahtraLord:result.NaksahtraLord});
            }
            
        });

      

    }

    render(){
     
        return(
            
            <div className="results-page">
                <Wheel/>
                <div className="summary">
                    <p>Your Ascendant is: {this.state.ascendant}</p>
                    <p>Your Lunar Mansion is: {this.state.Naksahtra}</p>
                    <p>Your NaksahtraLord is: {this.state.NaksahtraLord}</p>
                
                </div>         
            </div>
        )
    }

}

export default data(Chart);
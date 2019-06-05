import React from 'react';
import {data} from './Provider';
import Wheel from './WheelComponent';
import Ascendants from './Ascendants';
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

    

    componentWillMount(){
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

    componentDidMount(){
        if(this.state.ascendant === "Leo"){
            console.log("kedhjhdhd")
        }
    }


    render(){
        
        return(
            
            <div className="results-page">
                <Wheel/>
                <div className="summary">
                    <p>Your Ascendant is: {this.state.ascendant}</p>
                    <p className="paragraphs">
                    The Ascendant in both Western and Vedic astrology is the zodiac sign that is ascending on the 
                    eastern horizon at the time of birth. Most Vedic astrologers believe the ascendant sets up the
                    map for an individuals entire life, and some believe the most important point in a natal chart.
                    The Ascendant is also believed to be how a person presents themselves to the world
                    </p>
                    <p>Your Lunar Mansion is: {this.state.Naksahtra}</p>
                    <p className="paragraphs">
                    The Lunar Mansions are determined by the position of the Moon as she circles the Earth.  
                    Taking her average motion of 12° 51' and 26" and dividing that by the 360°s of the zodiac, 
                    we arrive at the 28 distinct positions the Moon can occupy in the sky on any given night.
                    
                    </p>
                    <p>Your NaksahtraLord is: {this.state.NaksahtraLord}</p>
                
                </div>         
            </div>
        )
    }

}

export default data(Chart);
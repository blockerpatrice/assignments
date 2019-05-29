import React, {Component, createContext} from 'react';
import Axios from 'axios';
import index from './index.css';
import Submit from './SubmitHandle';
import Geo from './Geo';
import Dropdown from './Dropdown';

const {Consumer,Provider} = createContext();
//axios is a javascript library meant to handle http requests

class Home extends Component {

    constructor(){
        super();
        this.state ={
            name:'',
            date: '',
            month:'',
            year: '',
            hour: '',
            minute: '',
            latitude: '',
            longitude: '',
            location: '',
            timezone: '',
            unknowntime: false
        }
  
    }

    handleChange = (e) =>{
        e.preventDefault();
        let {name, checked, type} = e.target;

        let value;
        if(type === 'checkbox'){
            value = checked
        } else {
            value = e.target.value
        }
        this.setState({[name]: value})
    }


    toggle = () => {
        console.log(
            "toggle"
        );
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        //Submit();
    }

    render(){

        return (
            <div> 
             <div className="header"><b>Modern Age Astrology</b></div>

                <div className="form-style">
                    <h1> Natal Chart Report <p className="reportDes">Get a Free Natal Chart report to find out more about yourself!</p></h1>
                   
                    <form onSubmit={this.handleSubmit}> 
                        
                        <input onChange={this.handleChange} type="text" name='name' placeholder="Name" value={this.state.name}/>
                        <div className="entry">
                            <input onChange={this.handleChange} type="number" name='month' placeholder="Month" value={this.state.month}/>
                            <input onChange={this.handleChange} type="number" name='date' placeholder="Day" value={this.state.date}/>
                            <input onChange={this.handleChange} type="number" name='year' placeholder="Year" valu={this.state.year}/>
                        </div>
                        <div className="entry">
                            <input onChange={this.handleChange} type="number" name='hour' placeholder="Hour of birth" value={this.state.hour}/>
                            <input onChange={this.handleChange} type="number" name='minute' placeholder="Minute of birth" value={this.state.minute}/>
            
                        </div>
                        <p id="inputinfo">Please input hour in 24 hour format</p>
                        <Dropdown />
                            <Geo/>
                        <p id="inputinfo">
                            <input onChange={this.handleChange} type="checkbox" name='unknowntime' value={this.state.isGoing}/> Check this box if you do not know birthtime.
                        </p>
                        
                        <input type="submit" value="Send"/>
                    </form>
                </div>

            </div>
        );
    }

}
export default Home;
import React from 'react';
import MapsApiCall from './MapsApiCall';
import DropdownMenu from './Dropdown'
import {data} from './Provider';

class Form extends React.Component{

    constructor(){
        super();
        this.state ={
            name:'',
            date:'',
            month:'',
            year: '',
            hour: '',
            minute: '',
            latitude:'',
            longitude:''
         
        }

    }
    
    handleChange = (e) =>{
        e.preventDefault();
        let {name} = e.target;

        let value;
     
        value = e.target.value
        
        this.setState({
            [name]: value
        }, () => {
            this.props.saveDate(this.state.date);
            this.props.saveMonth(this.state.month);
            this.props.saveYear(this.state.year);
            this.props.saveHour(this.state.hour);
            this.props.saveMinute(this.state.minute);
            this.props.saveName(this.state.name);
        })
      

    }



    render(){
        
        return(
            <div> 
            
               <div className="form-style">
                   <h1> Natal Chart Report <p className="reportDes">Get a Free Natal Chart report to find out more about yourself!</p></h1>
                  
                   <form onSubmit={this.handleSubmit}> 
                       
                       <input onChange={this.handleChange} type="text" name='name' placeholder="Name" value={this.state.name} autoComplete="off"/>
                       <div className="entry">
                           <input onChange={this.handleChange} type="number" name='month' placeholder="Month" value={this.state.month} autoComplete="off"/>
                           <input onChange={this.handleChange} type="number" name='date' placeholder="Day" value={this.state.date} autoComplete="off"/>
                           <input onChange={this.handleChange} type="number" name='year' placeholder="Year" value={this.state.year} autoComplete="off"/>
                       </div>
                       <p id="inputinfo">Please input hour of birth in 24 hour format</p>
                       <div className="entry">
                           <input onChange={this.handleChange} type="number" name='hour' placeholder="Hour of birth" value={this.state.hour} autoComplete="off"/>
                           <input onChange={this.handleChange} type="number" name='minute' placeholder="Minute of birth" value={this.state.minute} autoComplete="off"/>
           
                       </div>
                       <p id="inputinfo">Please Select Time Zone</p>
     
                      
                        <DropdownMenu />
                       
                       <MapsApiCall/>
                       
                       
                   </form>
                   
               </div>
              
           </div>
          
        )
    }
}

export default data(Form);
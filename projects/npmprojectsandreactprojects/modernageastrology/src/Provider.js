import React from 'react';

const MyContext = React.createContext();

class Provider extends React.Component{
    constructor(){
        super();
        this.state = { 
            name:'',
            date:'',
            monthString:'',
            month:'',
            year:'',
            hour:'',
            minute:'',
            latitude:'',
            longitude:'',
            timezone:'',
            test:'',

        }
    }

    componentWillMount(){
        this.setState({latitude: this.props.latitude})
        this.setState({longitude: this.props.longitude})
    }

    saveName = newValue => {
        this.setState({name:newValue});
    }
    saveDate = newValue => {
        this.setState({date:newValue});
    }
    saveMonth = newValue => {
        if(newValue == 1){
            this.setState({monthString:"January"})
        }else if(newValue == 2){
            this.setState({monthString:"Feburary"})
        }else if(newValue == 3){
            this.setState({monthString:"March"})
        }else if(newValue == 4){
            this.setState({monthString:"April"})
        }else if(newValue == 5){
            this.setState({monthString:"May"})
        }else if(newValue == 6){
            this.setState({monthString:"June"})
        }else if(newValue == 7){
            this.setState({monthString:"July"})
        }else if(newValue == 8){
            this.setState({monthString:"August"})
        }else if(newValue == 9){
            this.setState({monthString:"September"})
        }else if(newValue == 10){
            this.setState({monthString:"October"})
        }else if(newValue == 11){
            this.setState({monthString:"November"})
        }else if(newValue == 12){
            this.setState({monthString:"December"})
        }
        this.setState({month:newValue});
    }
    saveYear = newValue => {
        this.setState({year:newValue});
    }
    saveHour = newValue => {
        this.setState({hour:newValue});
    }
    saveMinute = newValue => {
        this.setState({minute:newValue});
    }
    saveLat = newValue => {
        this.setState({latitude:newValue});
    }
    saveLong = newValue => {
        this.setState({longitude:newValue});
    }
    saveTimezone = newValue => {
        this.setState({timezone:newValue});
    }


    
    render(){ 
        return(
            <MyContext.Provider 
                value ={{
                    ...this.state,
                    saveName:this.saveName,
                    saveValue:this.saveValue,
                    saveDate:this.saveDate,
                    saveMonth:this.saveMonth,
                    saveYear:this.saveYear,
                    saveHour:this.saveHour,
                    saveMinute:this.saveMinute,
                    saveLat:this.saveLat,
                    saveLong:this.saveLong,
                    saveTimezone:this.saveTimezone,
                   
                }}>
                
                {this.props.children}
               
            </MyContext.Provider>
            
        )
       
    } 

}

export default Provider;

export const data = C => props => (
    <MyContext.Consumer>
        {value => <C {...value} {...props}/>}
    </MyContext.Consumer>
)


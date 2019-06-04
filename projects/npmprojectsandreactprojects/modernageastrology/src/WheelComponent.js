import React from 'react';
import {data} from './Provider';
import ReactHtmlParser from 'react-html-parser';

class WheelComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            month:'',
            chart:'',
        }
    }

    componentWillMount(){
        let setter = this;
        
        let string = this.props.monthString + " " + this.props.date + " " + this.props.year + " " + this.props.hour + ":" + this.props.minute;
        
        let date = encodeURIComponent(string);

        let path = "http://planetwatcher.com/chartwheel.php?date=" + date + "&size=" + 500 + "&asc=" + 0 + "&name=" + this.props.name;
        let image = "<img src=" + path + ">";
        setter.setState({chart:image});
    }
   


    render(){
        // console.log(this.state.chart)
        return(
            <div>
                <div className="title"><u>Natal Chart for {this.props.name}</u></div>
                <div>{ReactHtmlParser(this.state.chart)}</div>
            </div>
            
            
            )
    }
}

export default data(WheelComponent);
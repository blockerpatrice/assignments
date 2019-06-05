import React from 'react';

class Ascendants extends React.Component{

    constructor(){
        super();
            this.state ={
                ascendentDes:''
            }  
        
    }

    componentDidMount(){
        console.log(this.props.ascen)
        let setter = this;

        if(this.props.ascen == 'Leo'){
            setter.setState({ascendentDes:'Hacing a leo'})
        }
    }

    render(){
        return(
            <div>{this.state.ascendentDes}</div>
        );
    }
}

export default Ascendants;
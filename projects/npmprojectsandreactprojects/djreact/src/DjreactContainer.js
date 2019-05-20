import React from 'react';
import Square from './Square.js'
import Sound from './Djsound.js'

class DjreactContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            //parent component will contain 4 square array
           colors: ["white","white","white","white"]
        }
    }

    buttonOne = () => {
        //changes all boxes to either black or white

        this.setState(() =>{
            if(this.state.colors[0] === "white" || this.state.colors[0] === "purple"){
                return{
                    colors:["black","black","black","black"]
                }
            }else if (this.state.colors[0] === "black"){
                return{
                    colors:["white","white","white","white"]
                }
            }
        })

    }

    buttonTwo = () => {
        this.setState(()=> {
            return{
                colors:["purple", "purple", this.state.colors, this.state.colors]
            }
        })
    }

    buttonThree = () => {
        this.setState(() => {
            return{
                colors:[this.state.colors,this.state.colors,"blue",this.state.colors]
            }
        })
    }

    buttonFour= () => {
        this.setState(() => {
            return{
                colors:[this.state.colors,this.state.colors,this.state.colors,"blue"]
            }
        })
    }

    buttonFive = (e) => {

        e.preventDefault();
        console.log('The link was clicked.');
          
    }

    render() {
        return (
            <div className="body-container">
                <div className="grid-container"> 
                    <Square color={this.state.colors[0]} id="box1"/>
                    <Square color={this.state.colors[1]} id="box2"/>
                    <Square color={this.state.colors[2]} id="box3"/>
                    <Square color={this.state.colors[3]} id="box4"/>
                </div>
                <div className="buttons">
                    <button onClick={this.buttonOne}>Turn all black or white</button>
                    <button onClick={this.buttonTwo}>Turn top half purple</button>
                    <button onClick={this.buttonThree}>Turn bottom left blue</button>
                    <button onClick={this.buttonFour}>Turn bottom right blue</button>
                </div>
                <div className="buttons">
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
            </div>   
    
        )
    }
}

export default DjreactContainer;
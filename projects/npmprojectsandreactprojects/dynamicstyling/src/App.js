import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      isAuth: true,
      background: 'red',
      width: '100pt',
      height: '50pt'
    }
    this.styles={
      background: this.state.background,
      width: this.state.width,
      height: this.state.height

    }
  }

  render(){

  switch(this.state.isAuth){
    case 'isAuthorized':
    return 
  }

    // if(this.state.isAutgh){
    //   return <div>Welcome back Patty</div>
    // }else{
    //   return <div>Goodbye Patty</div>
    // }
  }
}

export default App;

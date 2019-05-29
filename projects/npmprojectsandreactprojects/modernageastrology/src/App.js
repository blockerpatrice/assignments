import React from 'react';
import {Switch,Route} from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;

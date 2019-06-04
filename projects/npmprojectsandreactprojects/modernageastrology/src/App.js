import React from 'react';
import {Switch,Route} from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import Form from './Form';
import Chart from './Chart';
import RouteChart from './RouteChart';


function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
          <Route exact path="/" component={Form}/>
          <Route exact path="/chart" component={Chart}/>
      </Switch>
      <RouteChart/>
      <Footer/>
    </div>
  );
}

export default App;

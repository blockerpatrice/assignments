import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter} from "react-router-dom";
import Provider from './Provider';


ReactDOM.render(<BrowserRouter><Provider><App/></Provider></BrowserRouter>, document.getElementById('root'));
/*<BrowserRouter> is a component that tells the app which parts we are allowing routing through,
in this case it is the entire application so we wrap the App component in browserRouter. */

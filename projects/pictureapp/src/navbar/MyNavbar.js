import React from "react";
import { Link } from "react-router-dom";
import { withProvider } from "../GlobalProvider.js";
import "./MyNavbar.css";
import "../App.css"


function MyNavbar (props){
        return (
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Picture App</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signup" className="nav-link">SignUp</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
         
    );
 
}

export default withProvider(MyNavbar);
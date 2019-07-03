import React, { Component } from 'react';
import './Home.css';
import SearchBar from '../searchbar/SearchBar.js';
import HomePreview from '../homepage/HomePreview.js'

class Home extends Component {
   
    render() { 
        return ( 
            <div className="home">
                <div className="pencils">
                    <SearchBar/>
                </div>
                <div className="spacing"></div>
                <HomePreview/>
            </div>
        );
    }
}
 
export default Home;
import React, { Component } from 'react';
import SearchBar from '../searchbar/SearchBar.js';
import './SearchPage.css';
import SearchOptions from './SearchOptions.js';

class SearchPage extends Component {
   
    render() { 
        return ( 
            <div className="background">
                <SearchBar/>
                <SearchOptions/>
            </div>
        );
    }
}
 
export default SearchPage;
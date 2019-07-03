import React, { Component } from 'react';
import './SearchPage.css';
import {withProvider} from '../GlobalProvider.js';
import axios from 'axios';
import ImgList from '../unsplashcomponents/ImgList.js'


class SearchOptions extends Component {

    constructor() {
		super();
		this.state = {
			imgs: []
		};
    }
    
    componentDidMount(){
        axios.get(
            `https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${this.props.searchword}&client_id=734bbebaa77968a6b81ac40081466b1648ab43246609e5ec00aff533cd24d775`
            )
            .then(data => {
            this.setState({ imgs: data.data.results });
            })
            .catch(err => {
            console.log('Error happened during fetching!', err);
        });
    }
    
    render() { 
        return ( 
            <div className="container">
            
                <ImgList data={this.state.imgs} />
			
            </div>
        );
    }
}
 
export default withProvider(SearchOptions);
import React from 'react';
import Img from './Img';
import Unsplash from 'react-unsplash-wrapper'
const axios = require('axios');

const ImgList = props => {
	const results = props.data;
	let imgs = results.map(img => <Img url={img.urls.small} key={img.id}/>);

	return (
		
		<ul className="img-list">
			{imgs}
		</ul>
	
	);
};

export default ImgList;
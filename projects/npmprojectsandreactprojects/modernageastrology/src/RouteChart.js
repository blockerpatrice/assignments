import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';

function RouteChart(props){
    return(
        <div className="submit-button">
            <Link to="/chart" className="Link">Render Chart</Link>
        </div>
    )
}

export default withRouter(RouteChart);
import React from 'react';

const Img = props => (
  <li className="img-wrap">
    <img src={props.url} alt=""/>

    <form method="get" action={props.url} target="_blank" className="form">
      <button className="button" type="submit">Download</button>
    </form>
  </li>
);

export default Img;
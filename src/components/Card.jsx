import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/card.css';

const Card = (props) =>{

	return(
		<div className="card">
			<img src={props.img}/>
			<p>{props.description}</p>
		</div>
	)
}

export default Card;
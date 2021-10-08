import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/card.css';

const Card = (props) =>{

	return(
		<div className="card">
			<img src={props.img}/>
		</div>
	)
}

export default Card;
import React from 'react';
import ReactDOM from 'react-dom';


import '../styles/card.css';

const Card = (props) =>{

	return(
		<div className="card" onClick={props.onClick}>
			<img src={require('../media/img/wine-prod-' + props.img + '.png').default}/>
			<p>{props.description}</p>
			<h1 className="price">{props.price}</h1>
		</div>
	)
}

export default Card;
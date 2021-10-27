import React from 'react';
import ReactDOM from 'react-dom';


import '../styles/card.css';

const Card = (props) =>{

	return(
		<div className="card" onClick={props.onClick}>
			<img src={require('../media/img/wine-prod-' + props.img + '.png').default}/>
			<div className="wine-name-container">
				<h1 className="wine-name">{props.name}</h1>
			</div>
			<p>{props.description}</p>
			<div className="price-container">
				<h1 className="price">{props.price}</h1>
			</div>
		</div>
	)
}

export default Card;
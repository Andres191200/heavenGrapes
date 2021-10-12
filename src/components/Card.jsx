import React from 'react';
import ReactDOM from 'react-dom';


import '../styles/card.css';

const Card = (props) =>{

	return(
		<div className="card">
			<img src={require('../media/img/wine-prod-' + props.img + '.png').default}/>
			<p>{props.description}</p>
			<div className="info-wine">
				<h1 className="price">{props.price}</h1>
			</div>
		</div>
	)
}

export default Card;
import React from 'react';
import ReactDOM from 'react-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';


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
			
			<button className="add-to-cart-button">Add to cart<FontAwesomeIcon icon={faShoppingCart}/></button>
		</div>
	)
}

export default Card;
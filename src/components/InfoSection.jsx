import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card.jsx';

import '../styles/infoSection.css';
import wineLogo from '../media/img/wineLogo.png';

import cards from '../cards.json';



const InfoSection = () =>{
		return (
			<div className="info-main-container" id="#infoSection">
				<div className="some-wines-text">
					<h1>Our catalog</h1>
				</div>
				<div className="card-container">
					{cards.map((card,index) =>
						<Card key={card.index} description={card.description} img={card.img} price={card.price}/>
					)}
				</div>
			</div>
			);
}

export default InfoSection;
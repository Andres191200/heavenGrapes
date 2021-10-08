import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card.jsx'

import '../styles/infoSection.css'
import wineLogo from '../media/img/wineLogo.png';

import wineProd1 from '../media/img/wine-prod-1.png';
import wineProd2 from '../media/img/wine-prod-2.png';
import wineProd3 from '../media/img/wine-prod-3.png';
import wineProd4 from '../media/img/wine-prod-4.png';

const InfoSection = () =>{
		return (
			<div className="info-main-container" id="#infoSection">
				<div className="some-wines-text">
					<h1>Our catalog</h1>
				</div>
				<div className="card-container">
					<Card description="A wine from north antartica elaborated with rare icy-grapes, it comes from 
					New Zeland, One of our sweetest wines :)... some more description here..." 
					img={wineProd1} price="250 EUR"
					/>

					<Card description="Special acid grapes wine with little biterness hints and couple of Chardonnay grapes
					extract, ideal to invite some friends :o" 
					img={wineProd2} price="180 EUR"
					/>

					<Card description="Classic malbec wine of our house, is our speciality Malbec wines, 
					one of our best wines" 
					img={wineProd3} price="230 EUR"
					/>

					<Card description="Grenache and Cabernet grapes wine with acid hints that it'll combine with 
					sweet of Cabernet flavour" 
					img={wineProd4} price="199 EUR"
					/>

				</div>
			</div>
			);
}

export default InfoSection;
import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card.jsx'

import '../styles/infoSection.css'
import wineLogo from '../media/img/wineLogo.png';


const InfoSection = () =>{
		return (
			<div className="info-main-container" id="#infoSection">
				<div className="some-wines-text">
					<h1>Our catalog</h1>
				</div>
				<div className="card-container">
					<Card description="A wine from north antartica elaborated with rare icy-grapes" 
					img={wineLogo} price="250"
					/>

					<Card description="A wine from north antartica elaborated with rare icy-grapes" 
					img={wineLogo} price="250"
					/>

					<Card description="A wine from north antartica elaborated with rare icy-grapes" 
					img={wineLogo} price="250"
					/>

					<Card description="A wine from north antartica elaborated with rare icy-grapes" 
					img={wineLogo} price="250"
					/>

				</div>
			</div>
			);
}

export default InfoSection;
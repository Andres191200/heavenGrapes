import React from 'react';
import ReactDOM from 'react-dom';

import slider from '../slider.json';
import '../styles/infoSection.css';

import Slider from './slider';

const infoSection = () =>{
	return(
			<div className="info-container">
				<div className="curve">
				</div>
				<div className="img-container">
					<ul>	
						{
							slider.map((item, index) =>
								<Slider key={index} index={item.key}/>
							)
						}
					</ul>
				</div>
				<div className="about-us-container">
					<h1>OUR</h1><h1>COMPANY</h1>
					<p>We want clients to agree that our wines are the best, that's why
					we focus on quality and performance, if you wanna taste a good wine, you are in the correct 
					place, every type of wine is here, sweets wines, acids, tastiers, and so on...
					</p>
					<h2>we hope you enjoy our wines :D</h2>
				</div>
				<img className="wine-bottle" src={require('../media/img/wine-bottle.png').default}/>

			</div>

		);
}

export default infoSection;
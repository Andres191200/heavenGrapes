import React, {Fragment, useState, useEffect as UseEffect, useRef as UseRef} from 'react';

import Header from './header.jsx';

import '../styles/aboutUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faTools} from '@fortawesome/free-solid-svg-icons';
import {faArchive} from '@fortawesome/free-solid-svg-icons';
import {faTruck} from '@fortawesome/free-solid-svg-icons';

const aboutUs = (props) =>{

	const refDiv1 = UseRef();
	const refDiv2 = UseRef();
	const refDiv3 = UseRef();

	UseEffect(() =>{
		refDiv1.current.classList.add('dropdown');
		refDiv2.current.classList.add('dropdown');
		refDiv3.current.classList.add('dropdown');
	},[]);

	return(
		<Fragment>	
			<Header/>
			<div className="main-about-us-container">
				<div className="about-info-container info-1" ref={refDiv1} style={{"--order": 1}}>
					<div className="icon-container">
						<FontAwesomeIcon icon={faTools} className="about-icon"/>
					</div>
					<div className="info">
						<h1>Automatization</h1>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus fuga 
					 	maxime dicta dolorum iste ipsa aspernatur, mollitia libero quidem molestiae
						</p>
					</div>
				</div>

				<div className="about-info-container info-2" ref={refDiv2} style={{"--order": 2}}>
					<div className="icon-container">
						<FontAwesomeIcon icon={faArchive} className="about-icon"/>
					</div>
					<div className="info">
						<h1>Quality</h1>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus fuga maxime 
						dicta dolorum iste ipsa aspernatur, mollitia libero quidem molestiae perspiciatis 
						</p>
					</div>
				</div>

				<div className="about-info-container info-3" ref={refDiv3} style={{"--order": 3}}>
					<div className="icon-container">
						<FontAwesomeIcon icon={faTruck} className="about-icon"/>
					</div>
					<div className="info">
						<h1>Shipping</h1>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus fuga maxime 
						dicta dolorum iste ipsa aspernatur, mollitia libero quidem molestiae perspiciatis 
						</p>
					</div>
				</div>

			</div>
			

			<div className="custom-shape-divider-bottom-1635720974">
    			<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        			<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    			</svg>
			</div>



		</Fragment>
		)
}



export default aboutUs;
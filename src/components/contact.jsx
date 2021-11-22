import React, {Fragment, useState as UseState} from 'react';

import '../styles/contact.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {faUser, faTruck, faBuilding, faUsers} from '@fortawesome/free-solid-svg-icons';

import Header from './header.jsx';
import options from '../contact-view-options.json';
import Option from './option.jsx'; 	

import { config } from '@fortawesome/fontawesome-svg-core';
config.familyPrefix = 'fa';

const contact = props =>{

	const [option, setOption] = UseState('');

	return(
		<Fragment>
			<Header/>

			<div className="main-contact-container">
				<div className="options-info-container">
					<div className="options-container">
						<div className="main-contact-message">
							<h1>How</h1>
							<h1>can</h1>
							<h1>we help you?</h1>
						</div>
						<div className="options">
							{
								options.map((option,index) =>
									<Option setOption={setOption} option={option}/>
								)
							}
						</div>
					</div>
					<div className="main-option-info-container">
						<div className="option-title">
							<h1>{option.name}</h1>	
						</div>
						<div className="info-container">				
							<div className="option-info-1">
								{
									option!='' ? <FontAwesomeIcon icon={['fas',option.icons[0]]}/> : ''
								}
							</div>
							<div className="option-info-2">
								{
									option!='' ? <FontAwesomeIcon icon={faBuilding}/> : ''
								}
							</div>
							<div className="option-info-3">
								{
									option!='' ? <FontAwesomeIcon icon={option.icons[2]}/> : ''
								}
							</div>
							<div className="option-info-4">
								{
									option!='' ? <FontAwesomeIcon icon={option.icons[3]}/> : ''
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
		)
}

export default contact;
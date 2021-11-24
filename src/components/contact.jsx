import React, {Fragment, useState as UseState} from 'react';

import '../styles/contact.css';

import Header from './header.jsx';
import options from '../contact-view-options.json';
import Option from './option.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faGlobeAmericas} from '@fortawesome/free-solid-svg-icons';
import {faMoneyBillWave} from '@fortawesome/free-solid-svg-icons';
import {faCoins} from '@fortawesome/free-solid-svg-icons';
import {faFileInvoiceDollar} from '@fortawesome/free-solid-svg-icons';
import {faAngry} from '@fortawesome/free-solid-svg-icons';

const icons = [faGlobeAmericas,faMoneyBillWave,faCoins,faFileInvoiceDollar,faAngry]; //ARRAY OF ICONS TO PASS INTO OPTION COMPONENT
															//AND RENDER THEM...
const contact = props =>{

	const [option, setOption] = UseState('');

	return(
		<Fragment>
			<Header/>

			<div className="main-contact-container">
				<div className="option-title">
					<h1>¿How can we help you?</h1>	
				</div>
				<div className="info-container">
					{
						options.map((option,index) =>(
							<div className={"option-info option-info-" + index}>
								<Option name={option.name} icon={icons[index]} info={option.info}/> 			
							</div>	
						))
					}							
				</div>
			</div>
		</Fragment>
		)
}

export default contact;
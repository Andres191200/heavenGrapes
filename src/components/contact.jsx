import React, {Fragment, useState as UseState} from 'react';

import '../styles/contact.css';

import Header from './header.jsx';
import options from '../contact-view-options.json';
import Option from './option.jsx';

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
						<div className="info-container">
							<h1>{option.name}</h1>	
							<div className="option-info">
								<p>{option.info}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
		)
}

export default contact;
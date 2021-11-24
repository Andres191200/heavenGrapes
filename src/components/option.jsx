import React,{ useState as UseState} from 'react';
import options from '../contact-view-options.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const option = props =>{	
	return(
		<div className="option">
			<div className="option-icon-container">
				<FontAwesomeIcon icon={props.icon}/>
			</div>
			<div className="option-name-container">
				<h1>{props.name}</h1>
			</div>
			<div className="option-description-container">
				<p>{props.info}</p>
			</div>
		</div>
	)
}
export default option;
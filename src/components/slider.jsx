import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';

import '../styles/slider.css'

const Slider = (props) =>{
	return(
			<li>
				<img className="slider-img" src={require('../media/img/wine-carousel-' + props.index + '.jpg').default}/>
			</li>
		)
}

export default Slider;
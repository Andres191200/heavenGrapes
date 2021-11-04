import React, {useState, useEffect, useRef as UseRef} from 'react';
import ReactDOM from 'react-dom';

//SOME STATIC FILES
import wineLogo from '../media/img/wineLogo.png';
import woodSign from '../media/img/woodSign.png';

import '../styles/welcomeText.css'; 





const Welcome = (props) =>{

		return(
				<div className="welcome-container">
					<div className="welcome-text">
						<div className="wood-sign-container" id="wood">
							<img src={woodSign}/>
						</div>
						<h1>Heaven</h1>
						<img src={wineLogo}/>
						<h2>grapes</h2>
						<p>World class Wines! :)</p>
					</div>

					<button ref={props.ref}>Read more</button>
				</div>
			);
}

export default Welcome;
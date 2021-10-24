import React, {Fragment} from 'react';

import '../styles/login.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

const Login = (props) =>{

	const inputFocus = (event) =>{
		if(event.target.innerText=='Username' || event.target.innerText=='Password'){
			event.target.classList.add('active');
			event.target.previousElementSibling.focus();
		}
		else event.target.nextElementSibling.classList.add('active');
	}

	const inputFocusOut = (event) =>{
		if(event.target.value === ''){
			event.target.nextElementSibling.classList.remove('active');	
		}
	}

	return(
		<div className="main-container">
			<div className="image-container">
				<img src={require('../media/img/wine-shop.jpg').default}/>
			</div>


			<div className="login-container">
				<div className="back-icon-container">
					<a href="/"><FontAwesomeIcon icon={faArrowLeft} className="back-icon"/></a>
				</div>
				<div className="welcome-login">
					<h1>Welcome!</h1>
					<h1>Please log in</h1>
				</div>

				<div className="username-container field-container">
					<input className="field-input username-input"type="text" name="username" onFocus={inputFocus} onBlur={inputFocusOut}/>
					<span onClick={inputFocus}>Username</span>
					<FontAwesomeIcon icon={faUser} className="icon"/>
				</div>

				<div className="password-container field-container">
					<input className="field-input password-input"type="text" name="password" onFocus={inputFocus} onBlur={inputFocusOut}/>
					<span onClick={inputFocus}>Password</span>
					<FontAwesomeIcon icon={faLock} className="icon"/>
				</div>

				<button type="submit">Log in</button>

				<div className="no-account">
					<h2>Don't have an account?</h2>
					<a href="/Signup">Sign up</a>
				</div>
			</div>	
		</div>
		)
}

export default Login;

import React, {Fragment} from 'react';

import '../styles/login.css';

import {useForm} from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

const Login = (props) =>{

	const {register, handleSubmit, formState: { errors }} = useForm();

	const onSubmit = data =>{
		console.log(data);
	}

	const inputFocus = (event) =>{
		if(event.target.innerText=='Username' || event.target.innerText=='Password'){
			console.log(event.target);
			event.target.classList.add('active');
			event.target.previousElementSibling.focus();
		}

		else{
			console.log(event.target);
			event.target.nextElementSibling.classList.add('active');
		}

	}

	const inputFocusOut = (event) =>{
		if(event.target.value === ''){
			console.log(event.target)
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
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="username-container field-container">
						<input
							name="username"
							className="field-input username-input"type="text" 
							{...register('username',{required:true})}		
							onFocus={inputFocus} 
							onBlur={inputFocusOut}
						/>
						<span onClick={inputFocus}>Username</span>
						<FontAwesomeIcon icon={faUser} className="icon"/>
					</div>

					<div className="password-container field-container">
						<input 
							name="password" 
							className="field-input password-input"
							type="password" 
							{...register('password',{required:true})}		
							onFocus={inputFocus} 
							onBlur={inputFocusOut}
						/>
						<span onClick={inputFocus}>Password</span>
						<FontAwesomeIcon icon={faLock} className="icon"/>
					</div>

					<h1 className="error">
						{errors.username && 'Username required'}	
					</h1>

					<h1 className="error">
						{errors.password && 'Password required'}	
					</h1>
				

					<button>Log in</button>
				</form>
				<div className="no-account">
					<h2>Don't have an account?</h2>
					<a href="/Signup">Sign up</a>
				</div>
			</div>	
		</div>
		)
}

export default Login;

import React,{Form, useEffect as UseEffect, useState as UseState, useRef as UseRef, Fragment} from 'react';
import {useForm as UseForm} from 'react-hook-form';

import '../styles/signup.css';
import logo from '../media/img/logo.png';
import wineFillingCup from '../media/img/wine-filling-cup.png';
import grapes from '../media/img/grapes.png';

const signup = () =>{

	const {register, handleSubmit, formState: { errors }} = UseForm();

	const usernameRef = UseRef();
	const passwordRef = UseRef();
	const confirmPasswordRef = UseRef();

	const [PasswordsMatch, setPasswordsMatch] = UseState(true);

	const onSubmit = data =>{
		console.log(data);
	}

	const passwordsMatch = () =>{
			if(confirmPasswordRef.current.firstElementChild.value != passwordRef.current.firstElementChild.value) {
				setPasswordsMatch(false);
			}
			else{
				setPasswordsMatch(true);
			}
	}

	UseEffect(() =>{
		console.log(usernameRef);
	},[]);

	return(
		<div className="signup-main-container" >
			<img className="grapes" src={grapes}/>	
			<img className="wine-filling-cup" src={wineFillingCup}/>
			<div className="signup-form-container">
				<div className="signup-logo-container">
					<img src={logo}/>
				</div>
				<div className="signup-welcome-container">
					<h1>Welcome to sign up section!</h1>
				</div>
				<form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
					<div className="sign-up-username-container input-container" ref={usernameRef}>
						<input 
						className="signup-field-input"
						type="text" 
						name="username" 
						placeholder="Username" 
						{...register('username',{required:true})}
						/>
					</div>
					<div className="sign-up-email-container input-container">
						<input 
						className="signup-field-input"
						type="text" 
						name="email" 
						placeholder="E-mail"
						{...register('email',{required:true})}
						/>
					</div>

					<div className="sign-up-password-container input-container" ref={passwordRef}>
						<input 
						className="signup-field-input"
						id="password"
						type="password" 
						name="password" 
						placeholder="Password"
						{...register('password',{required:true, minLength:8})}				
						onChange={passwordsMatch} //ERROR ENTRE EL REGISTER Y EL ONCHANGE!!
						/>
					</div>

					<div className="sign-up-password-confirm-container input-container" ref={confirmPasswordRef}>
						<input 
						onChange={passwordsMatch}
						className="signup-field-input"
						id="password-confirm" 
						type="password" 
						name="password" 
						placeholder="Confirm password"/>
					</div>
					<div className="errors-container">
						<h1 className="error">
							{errors.username && 'Username required'}
						</h1>

						<h1 className="error">
							{
								errors.password?.type === 'required' && 'Password required' || 
								errors.password?.type === 'minLength' && 'Password min 8 characters long'
							}
						</h1>

						<h1 className="error">
							{errors.email && 'E-mail required'}
						</h1>

						<h1 className="error">
							{
								PasswordsMatch===true ? " " : "Passwords doesn't match"
							}
						</h1>
					</div>


					<button type="submit">Sign up</button>
				</form>
			</div>
		</div>
	)
}

export default signup;
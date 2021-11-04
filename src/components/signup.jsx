import React,{Form, useEffect as UseEffect, useState as UseState, useRef as UseRef, Fragment} from 'react';
import {useForm as UseForm} from 'react-hook-form';

import '../styles/signup.css';

const signup = () =>{

	const {register, handleSubmit, formState: { errors }} = UseForm();

	const usernameRef = UseRef();
	const passwordRef = UseRef();
	const confirmPasswordRef = UseRef();

	const onSubmit = data =>{
		console.log(data);


	}

	const passwordsMatch = (event) =>{
		if(event.target.value != passwordRef.current.firstElementChild.value){
			console.log('dont match');
		}
	}

	UseEffect(() =>{
		console.log(usernameRef);
	},[]);

	return(
		<div className="signup-main-container" >
			<div className="signup-form-container">
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="sign-up-username-container input-container" ref={usernameRef}>
						<input 
						type="text" 
						name="username" 
						placeholder="Username" 
						{...register('username',{required:true})}
						/>
					</div>
					<div className="sign-up-email-container input-container">
						<input 
						type="text" 
						name="email" 
						placeholder="E-mail"
						{...register('email',{required:true})}
						/>
					</div>

					<div className="sign-up-password-container input-container" ref={passwordRef}>
						<input 
						id="password"
						type="password" 
						name="password" 
						placeholder="Password"
						{...register('password',{required:true, minLength:8})}				
						/>
					</div>

					<div className="sign-up-password-confirm-container input-container">
						<input 
						onChange={passwordsMatch}
						id="password-confirm" 
						type="password" 
						name="password" 
						placeholder="Confirm password"/>
					</div>

					<h1 className="error">
						{errors.username && 'Username required'}
					</h1>

					<h1 className="error">
						{
							errors.password?.type === 'required' && 'Password required' || 
							errors.password?.type === 'minLength' && 'Password min 8 characters long'
						}
					</h1>


					<button>Sign up</button>
				</form>
			</div>
		</div>
	)
}

export default signup;
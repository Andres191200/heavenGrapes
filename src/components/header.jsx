import React, {useState, Fragment} from 'react';
import ReactDOM from 'react-dom';
import '../styles/header.css';

const Header = () =>{
	return (
		<div className="header-container">
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/Contact">Contact</a></li>
				<li><a href="/AboutUs">About us</a></li>
				<li><a href="/Login">Log in</a></li>
			</ul>
		</div>
		);
}

export default Header;
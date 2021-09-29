import React, {useState, Fragment} from 'react';
import ReactDOM from 'react-dom';
import '../styles/header.css';

const Header = () =>{
	return (
		<ul>
			<li><a href="#home">Home</a></li>
			<li><a href="#Contact">Contact</a></li>
			<li><a href="#About us">About us</a></li>
			<li><a href="#About us">Log in</a></li>
		</ul>
		);
}

export default Header;
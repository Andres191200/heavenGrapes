import React,{useRef as UseRef} from 'react';
import ReactDOM from 'react-dom';

import Card from './Card.jsx';

import '../styles/productSection.css';
import wineLogo from '../media/img/wineLogo.png';

import cards from '../cards.json';

const getInfoProduct = (event) =>{
	let target;
	if(event.target.parentElement.classList.contains("info-main-container")){
		target = event.target;
	}
	else{
		target = event.target.parentElement;
	}
}

const ProductSection = (props) =>{
	const btnref = props.ref;

	const divRef = UseRef();

	const scrollDown = (ref) =>{
		window.scrollTo(0, ref.divRef.current);
	}

	const scrollDiv = () =>{
		scrollDown(btnref.current);
	}

		return (
			<div  ref={divRef} className="product-main-container" id="#productSection">
				<div className="some-wines-text">
					<h1>Our catalog</h1>
				</div>
				{
					cards.map((card,index) =>
					<a href={"/product/" + index}>
						<Card onClick={getInfoProduct}
						key={index} 
						strength={card.strength}
						description={card.description}
						img={card.img}
						price={card.price}
						name={card.name}/>
					</a>
				)}
			</div>
			);
}

export default ProductSection;
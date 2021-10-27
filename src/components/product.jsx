import React,{Fragment} from 'react';

import Header from './header.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import '../styles/product.css'


const Product = (props) =>{

	const getStrengthColor = () =>{
			if(props.content.strength > 12){
				return('red');
			}
			return('green');
		}
	return(
		<Fragment>
			<Header/>
			<div className="main-product-container">
					
				<div className="img-product-container">
					<img src={require('../media/img/wine-prod-' + props.content.img + '.png').default}/>
				</div>

				<div className="info-product-container">
					<div className="wine-name-container">
						<h1>{props.content.name}</h1>
					</div>
					<div className="description">
						{props.content.description}
					</div>
					<div className="country info-product">
						<div>
							<h1>Country</h1>
						</div>
						<div>
							<h1>{props.content.country}</h1>
						</div>
					</div>

					<div className="manufacturer info-product">
						<div>
							<h1>Manufacturer</h1>
						</div>
						<div>
							<h1>{props.content.manufacturer}</h1>
						</div>
					</div>



					<div className="size info-product">
						<div>
							<h1>Size</h1>
						</div>
						<div>
							<h1>{props.content.size}</h1>
						</div>
					</div>

					<div className="size info-product">
						<div>
							<h1>Year</h1>
						</div>
						<div>
							<h1>{props.content.year}</h1>
						</div>
					</div>

					<div className="grape info-product">
						<div>
							<h1>Grape</h1>
						</div>
						<div>
							<h1>{props.content.grape}</h1>
						</div>
					</div>

					<div className="strength info-product">
						<div>
							<h1>Strength</h1>
						</div>
						<div>
							<h1 className={"strength-percent " + getStrengthColor()}>
								{props.content.strength + '%'}
							</h1>
						</div>
					</div>

				</div>

				<div className="price-coupon-container">
					<div className="prod-price-container">
						<h1>{props.content.price}</h1>
					</div>
					<div className="add-cart-button-container">
						<button>Add to cart</button>
						<FontAwesomeIcon icon={faShoppingCart} className="icon"/>
					</div>	
				</div>


			</div>
		</Fragment>
		)
}

export default Product;
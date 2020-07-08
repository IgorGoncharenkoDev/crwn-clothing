import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../redux/cart/cart.actions';

import {
	CheckoutItemStyled, ImageContainer, Image, Name, Price, Quantity, Value,
	ArrowButton, RemoveButton
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, addItemToCart, clearItemFromCart, removeItemFromCart }) => {
	const { name, price, quantity, imageUrl } = cartItem;

	return (
		<CheckoutItemStyled>
			<ImageContainer>
				<Image src={ imageUrl } alt="item"/>
			</ImageContainer>
			<Name>{ name }</Name>
			<Quantity>
				<ArrowButton onClick={ () => removeItemFromCart(cartItem) }>&#10094;</ArrowButton>
				<Value>{ quantity }</Value>
				<ArrowButton onClick={ () => addItemToCart(cartItem) }>&#10095;</ArrowButton>
			</Quantity>
			<Price>{ price }</Price>
			<RemoveButton onClick={ () => clearItemFromCart(cartItem) }>&#10005;</RemoveButton>
		</CheckoutItemStyled>
	);
}

const mapStateToProps = createStructuredSelector({
	selectCartItems, selectCartTotal
});

const mapDispatchTpProps = dispatch => ({
	addItemToCart: item => dispatch(addItemToCart(item)),
	removeItemFromCart: item => dispatch(removeItemFromCart(item)),
	clearItemFromCart: item => dispatch(clearItemFromCart(item))
});

export default connect(mapStateToProps, mapDispatchTpProps)(CheckoutItem);

import React from 'react';
import { connect } from 'react-redux';

import { addItemToCart } from '../../redux/cart/cart.actions';

import { CollectionItemStyled, ImageContainer, Footer, Name, Price, AddToCartButton } from './collection-item.styles';

const CollectionItem = ({ item, addItemToCart }) => {
	const { id, name, price, imageUrl } = item;

	return (
		<CollectionItemStyled>
			<ImageContainer style={{ backgroundImage: `url(${ imageUrl })`}} />
			<Footer>
				<Name>{ name }</Name>
				<Price>{ price }</Price>
			</Footer>
			<AddToCartButton
				inverted
				uppercase
				onClick={ () => addItemToCart(item) }
			>
				Add To Cart
			</AddToCartButton>
		</CollectionItemStyled>
	);
}

const mapDispatchToProps = dispatch => ({
	addItemToCart: item => dispatch(addItemToCart(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);

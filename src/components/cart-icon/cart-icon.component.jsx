import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartDropdown } from './../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { CartIconStyled, ShoppingIcon, ItemCount } from './cart-icon.styles';

const CartIcon = ({ itemsCount, toggleCartDropdown }) => (
	<CartIconStyled onClick={ toggleCartDropdown }>
		<ShoppingIcon/>
		<ItemCount>{ itemsCount }</ItemCount>
	</CartIconStyled>
);

const mapStateToProps = createStructuredSelector({
	itemsCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
	toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

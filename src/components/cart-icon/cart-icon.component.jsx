import React from 'react';
import { connect } from 'react-redux';

import { toggleCartDropdown } from './../../redux/cart/cart.actions';

import { CartIconStyled, ShoppingIcon, ItemCount } from './cart-icon.styles';

const CartIcon = ({ toggleCartDropdown }) => (
	<CartIconStyled onClick={ toggleCartDropdown }>
		<ShoppingIcon/>
		<ItemCount>0</ItemCount>
	</CartIconStyled>
);

const mapDispatchToProps = dispatch => ({
	toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

export default connect(null, mapDispatchToProps)(CartIcon);

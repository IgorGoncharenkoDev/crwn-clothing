import React from 'react';

import { connect } from 'react-redux';

import { Box } from '@material-ui/core';
import CartItem from '../cart-item/cart-item.component';
import Button from '../ui-components/button/button.component';

import { CartDropdownStyled, CartItems } from './cart-dropdown.styles';

const CartDropdown = ({ cartItems }) => (
	<CartDropdownStyled>
		<CartItems>
			{
				cartItems.map(cartItem => <CartItem key={ cartItem.id } { ...cartItem }/>)
			}
		</CartItems>
		<Box mt="auto" mx="auto">
			<Button uppercase>Go To Checkout</Button>
		</Box>
	</CartDropdownStyled>
);

const mapStateToProps = state => ({
	cartItems: state.cart.cartItems
});

export default connect(mapStateToProps)(CartDropdown);

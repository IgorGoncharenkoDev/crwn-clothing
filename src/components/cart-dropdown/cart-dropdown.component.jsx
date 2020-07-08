import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';

import { Box } from '@material-ui/core';
import CartItem from '../cart-item/cart-item.component';
import Button from '../ui-components/button/button.component';

import { CartDropdownStyled, EmptyMessage, CartItems } from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, dispatch }) => (
	<CartDropdownStyled>
		<CartItems>
			{
				!cartItems.length ? (
					<EmptyMessage>Your cart is empty</EmptyMessage>
				) : (
					cartItems.map(cartItem => <CartItem key={ cartItem.id } { ...cartItem }/>)
				)
			}
		</CartItems>
		<Box mt="auto" mx="auto">
			<Button
				to="/checkout"
				uppercase="true"
				onClick={ () => dispatch(toggleCartDropdown()) }
			>
				Go To Checkout
			</Button>
		</Box>
	</CartDropdownStyled>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);

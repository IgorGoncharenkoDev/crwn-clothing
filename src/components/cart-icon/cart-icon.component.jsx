import React from 'react';
import { connect } from 'react-redux';



import { CartIconStyled, ShoppingIcon, ItemCount } from './cart-icon.styles';

const CartIcon = () => (
	<CartIconStyled>
		<ShoppingIcon/>
		<ItemCount>0</ItemCount>
	</CartIconStyled>
);

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(CartIcon);

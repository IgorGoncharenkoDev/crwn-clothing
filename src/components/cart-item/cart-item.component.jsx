import React from 'react';

import { CartItemStyled, Image, Details, Name, Price } from './cart-item.styles';

const CartItem = ({ name, price, imageUrl, quantity }) => (
	<CartItemStyled>
		<Image src={ imageUrl }/>
		<Details>
			<Name>{ name }</Name>
			<Price>${ quantity} x ${ price }</Price>
		</Details>
	</CartItemStyled>
);

export default CartItem;

import React from 'react';

// import { connect } from 'react-redux';

import { Box } from '@material-ui/core';
import Button from '../ui-components/button/button.component';

import { CartDropdownStyled, CartItems } from './cart-dropdown.styles';

const CartDropdown = () => (
	<CartDropdownStyled>
		<CartItems>1</CartItems>
		<Box mt="auto" mx="auto">
			<Button>Go To Checkout</Button>
		</Box>
	</CartDropdownStyled>
);

const mapStateToProps = state => ({

});

// export default connect(mapStateToProps)(CartDropdown);
export default CartDropdown;

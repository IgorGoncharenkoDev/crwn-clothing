import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Container, Grid, Box } from '@material-ui/core';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { CheckoutStyled, HeaderCell, Header, Total } from './checkout.styles';

const CheckoutPage = ({ cartItems, total }) => (
	<CheckoutStyled>
		<Container maxWidth="xl">
			<Grid container spacing={ 0 }>
				<Grid item xs={ 12 }>
					<Header>
						<HeaderCell>
							<span>Product</span>
						</HeaderCell>
						<HeaderCell>
							<span>Description</span>
						</HeaderCell>
						<HeaderCell>
							<span>Quantity</span>
						</HeaderCell>
						<HeaderCell>
							<span>Price</span>
						</HeaderCell>
						<HeaderCell>
							<span>Remove</span>
						</HeaderCell>
					</Header>

					{
						cartItems.map(cartItem => <CheckoutItem key={ cartItem.id } cartItem={ cartItem }/>)
					}
				</Grid>
				<Grid item xs={ 12 }>
					<Box display="flex" justifyContent="flex-end" mt={ 4 }>
						<Total>Total: ${ total }</Total>
					</Box>
				</Grid>
				<Grid item xs={ 12 }>

				</Grid>
			</Grid>
		</Container>
	</CheckoutStyled>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);

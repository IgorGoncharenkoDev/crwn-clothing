import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForCheckout = price * 100;
	const publishableKey = 'pk_test_51H4NR2LqeANVBpNPCgOpWeaa1WfghYKNE61peTmG0lmVAWhJ7YhFmanmKIszr05QKWcoynCGFssXLegzhHqTHoIj00ohXrwkkg';

	const handleToken = token => {
		console.log(token);

		alert('Payment Success');
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN Clothing Ltd."
			billingAddress
			shippingAddress
			image="https://sendeyo.com/up/d/f3eb2117da"
			description={ `Your total is $${ price }` }
			currency="USD"
			amount={ priceForCheckout }
			panelLabel="Pay Now"
			token={ handleToken }
			stripeKey={ publishableKey }
		/>
	);
};

export default StripeCheckoutButton;

import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
	[ selectCart ],
	cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
	[ selectCartItems ],
	cartItems => cartItems.reduce(
		(accumulator, currentItem) => accumulator + currentItem.quantity, 0)
);

export const selectCartDropdownHidden = createSelector(
	[ selectCart ],
	cart => cart.hidden
);

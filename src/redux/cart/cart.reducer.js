import cartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const dummyData = [{
	id: 30,
	name: 'Camo Down Vest',
	imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
	price: 325,
	quantity: 1
},
	{
		id: 31,
		name: 'Floral T-shirt',
		imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
		price: 20,
		quantity: 2
	}]

const INITIAL_STATE = {
	hidden: true,
	cartItems: dummyData
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case cartActionTypes.TOGGLE_CART_DROPDOWN:
			return { ...state, hidden: !state.hidden };

		case cartActionTypes.ADD_ITEM_TO_CART:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload)
			}

		case cartActionTypes.CLEAR_ITEM_FROM_CART:
			return {
				...state,
				cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
			}

		case cartActionTypes.REMOVE_ITEM_FROM_CART:
			return {
				...state,
				cartItems: removeItemFromCart(state.cartItems, action.payload)
			}

		default:
			return state;
	}
};

export default cartReducer;

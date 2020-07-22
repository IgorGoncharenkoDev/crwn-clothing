import { takeEvery } from 'redux-saga/effects';

import ShopActionTypes from './shop.types';

// this function will to the async code we need
export function* fetchCollectionsAsync () {
	yield console.log('I am fired off');
}

export function* fetchCollectionsStart () {
	yield takeEvery(
		ShopActionTypes.FETCH_COLLECTIONS_START,
		fetchCollectionsAsync
	);
}

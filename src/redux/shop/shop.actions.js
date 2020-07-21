import ShopActionTypes from './shop.types';

import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';

export const updateCollections = (collectionsMap) => ({
	type: ShopActionTypes.UPDATE_COLLECTIONS,
	payload: collectionsMap
});

export const fetchCollectionsStart = () => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collections => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
	payload: collections
});

export const fetchCollectionsFailure = (error) => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
	payload: error.message
});

export const fetchCollectionsStartAsync = () => dispatch => {
	const collectionRef = firestore.collection('collections');

	// letting the app know that the process has just started
	dispatch(fetchCollectionsStart());

	// whenever the collectionRef gets updated or
	// whenever this code runs for the first time
	// the collectionRef will send us the snapshot
	// representing the code of our 'collections'-objects array
	collectionRef
		.get()
		.then(snapshot => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

			dispatch(fetchCollectionsSuccess(collectionsMap));
		})
		.catch(error => fetchCollectionsFailure(error));
};

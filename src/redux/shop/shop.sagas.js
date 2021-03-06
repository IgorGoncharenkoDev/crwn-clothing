import { takeLatest, all, call, put } from 'redux-saga/effects';

import ShopActionTypes from './shop.types';

import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';

export function* fetchCollectionsAsync () {
	try {
		const collectionRef = firestore.collection('collections');

		const snapshot = yield collectionRef.get();

		// we need to yield this function call in case the call takes longer than we expect
		const collectionsMap = yield call(
			convertCollectionsSnapshotToMap,
			snapshot
		);

		yield put(fetchCollectionsSuccess(collectionsMap));
	}
	catch (error) {
		yield put(fetchCollectionsFailure(error.message));
	}
}

export function* fetchCollectionsStart () {
	yield takeLatest(
		ShopActionTypes.FETCH_COLLECTIONS_START,
		fetchCollectionsAsync
	);
}

export function* shopSagas () {
	yield all([
		call(fetchCollectionsStart)
	])
}

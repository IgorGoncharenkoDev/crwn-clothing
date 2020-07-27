import { takeLatest, all, put, call } from 'redux-saga/effects';

import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase.utils';

import UserActionTypes from './user.types';

import { googleSignInSuccess, googleSignInFailure } from './user.actions';

export function* signInWithGoogle () {
	try {
		// getting userRef
		// (since we want to access the value that gets returned when .signInWithPopup() is successful)
		const userDocRef = yield auth.signInWithPopup(googleProvider);

		const { user } = userDocRef;

		const userRef = yield call(createUserProfileDocument, user);

		const userSnapshot = yield userRef.get();

		yield put(googleSignInSuccess({
			id: userSnapshot.id,
			...userSnapshot.data()
		}));
	}
	catch (error) {
		yield put(googleSignInFailure(error));
	}
}

export function* onGoogleSignInStart () {
	yield takeLatest(
		UserActionTypes.GOOGLE_SIGN_IN_START,
		signInWithGoogle
	);
}

export function* userSagas () {
	yield all([
		call(onGoogleSignInStart)
	]);
}

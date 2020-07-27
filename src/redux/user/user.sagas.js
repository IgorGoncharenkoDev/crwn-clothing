import { takeLatest, all, put, call } from 'redux-saga/effects';

import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase.utils';

import UserActionTypes from './user.types';

import { signInSuccess, signInFailure } from './user.actions';

export function* getSnapshotFromUserAuth (userAuth) {
	try {
		const userRef = yield call(createUserProfileDocument, userAuth);

		const userSnapshot = yield userRef.get();

		yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
	}
	catch (error) {
		yield put(signInFailure(error));
	}
}

export function* signInWithGoogle () {
	try {
		// getting userRef
		// (since we want to access the value that gets returned when .signInWithPopup() is successful)
		const userAuth = yield auth.signInWithPopup(googleProvider);

		yield getSnapshotFromUserAuth(userAuth);
	}
	catch (error) {
		yield put(signInFailure(error));
	}
}

export function* signInWithEmailAndPassword ({ payload: { email, password } }) {
	try {
		const userAuth = yield auth.signInWithEmailAndPassword(email, password);

		yield getSnapshotFromUserAuth(userAuth);
	}
	catch (error) {
		yield put(signInFailure(error));
	}
}

export function* onGoogleSignInStart () {
	yield takeLatest(
		UserActionTypes.GOOGLE_SIGN_IN_START,
		signInWithGoogle
	);
}

export function* onEmailSignInStart () {
	yield takeLatest(
		UserActionTypes.EMAIL_SIGN_IN_START,
		signInWithEmailAndPassword
	);
}

export function* userSagas () {
	yield all([
		call(onGoogleSignInStart),
		call(onEmailSignInStart)
	]);
}

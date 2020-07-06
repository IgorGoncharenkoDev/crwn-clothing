// importing the main 'firebase' utility library
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

export const config = {
	apiKey: "AIzaSyAxX_PWIP37dQee78LbTHCRT0tHU8n5kro",
	authDomain: "crwn-clothing-88fad.firebaseapp.com",
	databaseURL: "https://crwn-clothing-88fad.firebaseio.com",
	projectId: "crwn-clothing-88fad",
	storageBucket: "crwn-clothing-88fad.appspot.com",
	messagingSenderId: "386616038619",
	appId: "1:386616038619:web:3ca817973b34427975e8fe"
};

export const createUserProfileDocument = async (userAuthObject, otherData) => {
	if (!userAuthObject) return false;

	// querying a user using the 'user uid' which we get from the userAuth object
	const userRef = firestore.doc(`users/${ userAuthObject.uid }`);
	const snapshot = await userRef.get();

	// console.log(snapshot.data())

	// checking if the the logged-in user already exists in the database
	// and if the user does not exist we want to set the user into the database
	if (!snapshot.exists) {
		const { displayName, email } = userAuthObject;
		const createdAt = new Date();

		// this code below creates a Snapshot (data)
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...otherData
			});
		}
		catch (err) {
			console.log('Error when creating a new user:', err.message);
		}
	}

	return userRef;
};

// initializing firebase with the provided config
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// setting up Google Authentication
const googleProvider = new firebase.auth.GoogleAuthProvider();

// triggering the Google popup (when using GoogleAuthProvider() for authentication and sign in)
googleProvider.setCustomParameters({
	prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;

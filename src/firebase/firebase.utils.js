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

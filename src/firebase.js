import firebase from "firebase"

const firebaseConfig = {
	apiKey: "AIzaSyDOCAbC123dEf456GhI789jKl01-MnO",
	authDomain: "disney-plus-react-clone.firebaseapp.com",
	projectId: "disney-plus-react-clone",
	storageBucket: "myapp-project-123.appspot.com",
	messagingSenderId: "65211879809",
	appId: "1:65211879909:web:3ae38ef1cdcb2e01fe5f0c",
	measurementId: "G-8GSGZQ44ST"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig); // Init the firebase app
const db = firebaseApp.firestore(); // Connect DataBase
const auth = firebase.auth(); // Authentication
const provider = new firebase.auth.GoogleAuthProvider(); // For adding in google social login
const storage = firebase.storage(); // Store the media

export {auth, provider, storage };
export default db;

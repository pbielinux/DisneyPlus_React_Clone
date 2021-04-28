import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyBoHCy_1Ijz8ivWTszhkjl0yMAcExTK6Go',
	authDomain: 'disneyplus-react.firebaseapp.com',
	projectId: 'disneyplus-react',
	storageBucket: 'disneyplus-react.appspot.com',
	messagingSenderId: '983934541758',
	appId: '1:983934541758:web:243d2a8933bc830afc23ef',
	measurementId: 'G-L6C1BDEY73'
};

const firebaseApp = firebase.initializeApp(firebaseConfig); // Init the firebase app
const db = firebaseApp.firestore(); // Connect DataBase
const auth = firebase.auth(); // Authentication
const provider = new firebase.auth.GoogleAuthProvider(); // For adding in google social login
const storage = firebase.storage(); // Store the media

export { auth, provider, storage };
export default db;

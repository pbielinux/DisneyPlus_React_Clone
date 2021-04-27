import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyChjBGKgAb-pcCuhWZS5UGSEQEVGGAWBCk',
	authDomain: 'disney-plus-react-clone.firebaseapp.com',
	projectId: 'disney-plus-react-clone',
	storageBucket: 'disney-plus-react-clone.appspot.com',
	messagingSenderId: '693957044920',
	appId: '1:693957044920:web:fb27d7c1f90c26bb55e24d',
	measurementId: 'G-V6P2Q72N3F'
};

const firebaseApp = firebase.initializeApp(firebaseConfig); // Init the firebase app
const db = firebaseApp.firestore(); // Connect DataBase
const auth = firebase.auth(); // Authentication
const provider = new firebase.auth.GoogleAuthProvider(); // For adding in google social login
const storage = firebase.storage(); // Store the media

export { auth, provider, storage };
export default db;

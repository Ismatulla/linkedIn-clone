import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'
const firebaseConfig = {
    apiKey: "AIzaSyBpYKCNy_F6mDvVzFQqs3cRJ0SPXQHVAoo",
    authDomain: "linkedin-clone-3ee5a.firebaseapp.com",
    projectId: "linkedin-clone-3ee5a",
    storageBucket: "linkedin-clone-3ee5a.appspot.com",
    messagingSenderId: "861489800376",
    appId: "1:861489800376:web:44ba68e951adabeea4404d",
    measurementId: "G-XX1R30N9G8"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
export { auth, provider, storage };
export default db
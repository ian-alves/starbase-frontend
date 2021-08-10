import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyA37yxMplkjAJn4757XVyUVdISNon2NABY",
    authDomain: "starbase-74af2.firebaseapp.com",
    projectId: "starbase-74af2",
    storageBucket: "starbase-74af2.appspot.com",
    messagingSenderId: "1046920621978",
    appId: "1:1046920621978:web:3386026642e227013e1423"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

const auth = firebase.auth();
const database = firebase.database();

export { auth, database, firebase };
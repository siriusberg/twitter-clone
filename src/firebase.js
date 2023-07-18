import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDXRr7upx_QxsbP0RqNWP8J6Cjj7Xp7cp4",
    authDomain: "twitter-clone-9bf57.firebaseapp.com",
    databaseURL: "https://twitter-clone-9bf57-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "twitter-clone-9bf57",
    storageBucket: "twitter-clone-9bf57.appspot.com",
    messagingSenderId: "647160856532",
    appId: "1:647160856532:web:293ca1000490e1f49fa041",
    measurementId: "G-NDVM899JMQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
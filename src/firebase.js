import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "{YOUR_API_KEY}",
    authDomain: "{YOUR_AUTH_DOMAIN}",
    databaseURL: "{YOUR_DATABASE_URL}",
    projectId: "{YOUR_PROJECT_ID}",
    storageBucket: "{YOUR_STORAGE_BUCKET}",
    messagingSenderId: "{YOUR_SENDER_ID}",
    appId: "{YOUR_API_ID}",
    measurementId: "{YOUR_MEASUREMENT_ID}"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

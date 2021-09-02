// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCuygqagCy1muTSqjt3Ddbpf8bnAaGYOOw",
    authDomain: "linkedin-c9e82.firebaseapp.com",
    projectId: "linkedin-c9e82",
    storageBucket: "linkedin-c9e82.appspot.com",
    messagingSenderId: "592448180432",
    appId: "1:592448180432:web:6362afd3fbfd5088040ed5",
    measurementId: "G-K5WF4GPVQJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  const exports = {db, auth}

  export default exports;
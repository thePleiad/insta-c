import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAuuIWgS9NpoJQTFwu0zsOwOqxIQ6Q5fn0",
    authDomain: "insta-c-60636.firebaseapp.com",
    projectId: "insta-c-60636",
    storageBucket: "insta-c-60636.appspot.com",
    messagingSenderId: "1078514113441",
    appId: "1:1078514113441:web:7f7cd96484a844127009e0",
    measurementId: "G-Z6DG8W0FDF"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
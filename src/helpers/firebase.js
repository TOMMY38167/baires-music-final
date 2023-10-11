// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmUhyWpScEYWBXbaNt5OA3HudR0lV8IcU",
  authDomain: "bairesmusic.firebaseapp.com",
  projectId: "bairesmusic",
  storageBucket: "bairesmusic.appspot.com",
  messagingSenderId: "36481966522",
  appId: "1:36481966522:web:b8d086b54ca8700b56bd83",
  measurementId: "G-N5ETBDWELP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;

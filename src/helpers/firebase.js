// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAUstpRih9-evUj64IXfimGXXBPAY-MTM",
  authDomain: "baires-music.firebaseapp.com",
  projectId: "baires-music",
  storageBucket: "baires-music.appspot.com",
  messagingSenderId: "1063251197514",
  appId: "1:1063251197514:web:0b1c636164e8c94908b0b3",
  measurementId: "G-EYB8BVFMQZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;

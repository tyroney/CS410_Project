// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'  
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaXzjpYjdKIb1AptHyGtUiyieIAcqZ-GQ",
  authDomain: "expense-tracker-1df41.firebaseapp.com",
  projectId: "expense-tracker-1df41",
  storageBucket: "expense-tracker-1df41.appspot.com",
  messagingSenderId: "292013146374",
  appId: "1:292013146374:web:1f1cfa82733c0619a35e87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);



// firebase login
// firebase init
// firebase deploy

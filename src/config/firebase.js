// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6KpJfqyImnIvaNQ59LNFJXLrH7bD_7sU",
  authDomain: "pair-12-dts-mini-project.firebaseapp.com",
  projectId: "pair-12-dts-mini-project",
  storageBucket: "pair-12-dts-mini-project.appspot.com",
  messagingSenderId: "288504313015",
  appId: "1:288504313015:web:a659ae8877b70741dd0932",
  measurementId: "G-EDKPYTVL9M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
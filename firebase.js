// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfovV8V0wgrRagroNVy2BHUS8VQkpTloA",
  authDomain: "snake-game-2b26d.firebaseapp.com",
  projectId: "snake-game-2b26d",
  storageBucket: "snake-game-2b26d.firebasestorage.app",
  messagingSenderId: "956803237461",
  appId: "1:956803237461:web:db0ed77c4e23e652d3b6dc",
  measurementId: "G-H200BXM542"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
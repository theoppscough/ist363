// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzi1vaGjGNfbmbjWeCc57ePV9t-fkXfxc",
  authDomain: "project-3-7e1af.firebaseapp.com",
  projectId: "project-3-7e1af",
  storageBucket: "project-3-7e1af.firebasestorage.app",
  messagingSenderId: "596044831207",
  appId: "1:596044831207:web:5dfb1dd9e12b269a648542",
  measurementId: "G-0ZV7RV025G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app, auth };
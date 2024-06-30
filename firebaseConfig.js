// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAR2dQOKDfoc2rqwXM7BmFkFDN0myvizK4",
  authDomain: "flask-be2ef.firebaseapp.com",
  projectId: "flask-be2ef",
  storageBucket: "flask-be2ef.appspot.com",
  messagingSenderId: "207031787997",
  appId: "1:207031787997:web:39e540788f06ab916ad634",
  measurementId: "G-5CEXQ2SLKF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
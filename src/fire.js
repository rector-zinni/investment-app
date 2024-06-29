// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzTaFoxJ_me6UlkmtSpkUb6SBFcJD0mfc",
  authDomain: "liquid-cb1a7.firebaseapp.com",
  projectId: "liquid-cb1a7",
  storageBucket: "liquid-cb1a7.appspot.com",
  messagingSenderId: "1023274796827",
  appId: "1:1023274796827:web:a2926ec5460d09c85b75be",
  measurementId: "G-D22JPBQ1E6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 const auth = getAuth(app);
 export {auth}

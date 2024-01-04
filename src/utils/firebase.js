// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU4v2suI1yZY35e3DqLoiL8j6TyGN30RA",
  authDomain: "cineflix-gpt.firebaseapp.com",
  projectId: "cineflix-gpt",
  storageBucket: "cineflix-gpt.appspot.com",
  messagingSenderId: "912174883822",
  appId: "1:912174883822:web:54dd47bc96f709145364ff",
  measurementId: "G-WFDTQ9LP4X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
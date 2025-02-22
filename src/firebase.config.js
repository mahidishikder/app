// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuCz9bXuJETnosgQwRfFIl-IRqhFPddOY",
  authDomain: "apps-a4b7e.firebaseapp.com",
  projectId: "apps-a4b7e",
  storageBucket: "apps-a4b7e.firebasestorage.app",
  messagingSenderId: "750178087349",
  appId: "1:750178087349:web:bec94e7c5c8277a9c4a9fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
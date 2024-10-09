// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyADcfU5kv1_HtJ00RFHOlHZ06mXTH-MlDY",
    authDomain: "gialongconstruction-f4b3a.firebaseapp.com",
    projectId: "gialongconstruction-f4b3a",
    storageBucket: "gialongconstruction-f4b3a.appspot.com",
    messagingSenderId: "948336932081",
    appId: "1:948336932081:web:66f78d196d7b369a812550"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
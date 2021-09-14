// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAGNpKzUaF6GV1ldCp5olnJucK6iedY380",
    authDomain: "react-project---proy-final.firebaseapp.com",
    projectId: "react-project---proy-final",
    storageBucket: "react-project---proy-final.appspot.com",
    messagingSenderId: "279868343305",
    appId: "1:279868343305:web:55a780b5e90e7cbcbda4d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// getData devuelve conexion con firestore
export const getData = () => getFirestore(app);
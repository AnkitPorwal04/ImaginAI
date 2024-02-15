// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-7f3D43TGputY5LUSRGO0-ZP4y2s9P4E",
  authDomain: "imaginai-4863b.firebaseapp.com",
  projectId: "imaginai-4863b",
  storageBucket: "imaginai-4863b.appspot.com",
  messagingSenderId: "705304487326",
  appId: "1:705304487326:web:86bdd59d936f884d24228f",
  measurementId: "G-XYJ8BH33SQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


export const Auth = getAuth(app)
export const Provider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)
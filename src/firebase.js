// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcPIOpVcXoEfxZTo3HwIz2dtVF-84KUiI",
  authDomain: "popxauth.firebaseapp.com",
  projectId: "popxauth",
  storageBucket: "popxauth.appspot.com",
  messagingSenderId: "322058791481",
  appId: "1:322058791481:web:04288a55e5db61270ffbe8",
  measurementId: "G-1K1HWTQJCC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {db,auth,storage} ;
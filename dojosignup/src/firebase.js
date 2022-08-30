import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhzrmT6AA0xOPqrrGbPqS-TJwKVScwExA",
  authDomain: "dojosignup-a9cb7.firebaseapp.com",
  projectId: "dojosignup-a9cb7",
  storageBucket: "dojosignup-a9cb7.appspot.com",
  messagingSenderId: "624194312940",
  appId: "1:624194312940:web:89a39c1de6b4803007e3c9"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();

export {app, db}
import { initializeApp, getApps, getApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut} from 'firebase/auth'
import { getFirestore, query, getDocs, collection, where, addDoc } from "firebase/firestore";


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhzrmT6AA0xOPqrrGbPqS-TJwKVScwExA",
  authDomain: "dojosignup-a9cb7.firebaseapp.com",
  projectId: "dojosignup-a9cb7",
  storageBucket: "dojosignup-a9cb7.appspot.com",
  messagingSenderId: "624194312940",
  appId: "1:624194312940:web:89a39c1de6b4803007e3c9"
};

//Google Auth Provider
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        userID: user.uid,
        username: user.displayName,
        firstName: "",
        lastName: "",
        department: "",
        persNr: null,
        authProvider: "google",
        email: user.email,
        role: "USER"
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

//Login with email and password
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

//Register with email and password
const registerWithEmailAndPassword = async (username, firstName, lastName, department, persNr, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      username,
      firstName,
      lastName,
      department,
      persNr,
      authProvider: "local",
      email,
      role: "USER"
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

//Sent password reset link for email and password registered users
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

//Logout function
const logout = () => {
  signOut(auth);
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export {app, db, auth, signInWithGoogle, logInWithEmailAndPassword, registerWithEmailAndPassword, sendPasswordReset, logout};
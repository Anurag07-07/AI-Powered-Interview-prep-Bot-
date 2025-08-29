// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnnXx2wvqKZW3E4Htzs5X_eogFjIR22lU",
  authDomain: "interprep-67864.firebaseapp.com",
  projectId: "interprep-67864",
  storageBucket: "interprep-67864.firebasestorage.app",
  messagingSenderId: "701488301575",
  appId: "1:701488301575:web:fa3b1f7ee58c2e97888ca2",
  measurementId: "G-1L9F2C5BVJ"
};

// Initialize Firebase
const app = !getApps.length ?  initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
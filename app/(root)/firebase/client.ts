// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2owBXRxMWKXoXNQSWBCn47aiXJ9NW0QE",
  authDomain: "prepwise-bf102.firebaseapp.com",
  databaseURL:
    "https://prepwise-bf102-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "prepwise-bf102",
  storageBucket: "prepwise-bf102.firebasestorage.app",
  messagingSenderId: "843858438982",
  appId: "1:843858438982:web:99de40a7d678e39599d347",
  measurementId: "G-HBWEQM62J0",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);

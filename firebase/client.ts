// Import Firebase SDK
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase Configuration
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

export const auth = getAuth(app);
export const db = getFirestore(app);

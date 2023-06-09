// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyArxYnoN8pacN-aVzCeOrInkhmfyjG5NjQ",
  authDomain: "impact-influencers-demo.firebaseapp.com",
  projectId: "impact-influencers-demo",
  storageBucket: "impact-influencers-demo.appspot.com",
  messagingSenderId: "970064288",
  appId: "1:970064288:web:5a36b4f55eb1e93ed8e4c5",
  measurementId: "G-PY3PPYV273",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
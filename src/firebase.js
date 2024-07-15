// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Add this import
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUukQ8fCF3L0RS4iHA9r0NE1OoCFmvFQo",
  authDomain: "easybuy-e2b33.firebaseapp.com",
  projectId: "easybuy-e2b33",
  storageBucket: "easybuy-e2b33.appspot.com",
  messagingSenderId: "86160599221",
  appId: "1:86160599221:web:f3cc2a6e0fc4feefee76fc",
  measurementId: "G-9Z7J3F570P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore
const analytics = getAnalytics(app);

export { auth, db }; // Export auth and db

// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCUukQ8fCF3L0RS4iHA9r0NE1OoCFmvFQo",
  authDomain: "easybuy-e2b33.firebaseapp.com",
  projectId: "easybuy-e2b33",
  storageBucket: "easybuy-e2b33.appspot.com",
  messagingSenderId: "86160599221",
  appId: "1:86160599221:web:f3cc2a6e0fc4feefee76fc",
  measurementId: "G-9Z7J3F570P",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, db, signOut };

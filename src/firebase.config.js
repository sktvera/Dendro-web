import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  /* apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID, */

  apiKey: "AIzaSyBMZ6atle_QMVfYXw6Tpf-mviGmN-RYSQo",
  authDomain: "dendro-colombia.firebaseapp.com",
  projectId: "dendro-colombia",
  storageBucket: "dendro-colombia.appspot.com",
  messagingSenderId: "156192934803",
  appId: "1:156192934803:web:46ed2b8a526aec46c67666",
  measurementId: "G-X9Z08HEX88"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;


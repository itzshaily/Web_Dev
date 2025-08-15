// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // If you need Firestore, import it as well


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApw-lXe_nKRrEPTiVBoS4Sr3N05NBrmRY",
  authDomain: "login-auth-c260d.firebaseapp.com",
  projectId: "login-auth-c260d",
  storageBucket: "login-auth-c260d.firebasestorage.app",
  messagingSenderId: "8619411145",
  appId: "1:8619411145:web:b413ef955f8c9df07c6f18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app); // If you need Firestore, import and initialize it as well 
export default app;
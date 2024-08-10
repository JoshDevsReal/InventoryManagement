// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIWvYRj5DfsfeCxeozEUSSUjGjB80KhUM",
  authDomain: "inventory-management-8872a.firebaseapp.com",
  projectId: "inventory-management-8872a",
  storageBucket: "inventory-management-8872a.appspot.com",
  messagingSenderId: "727626091549",
  appId: "1:727626091549:web:2ca302ccdc47083a9e8af4",
  measurementId: "G-GW0ZYHPR8T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, firestore };
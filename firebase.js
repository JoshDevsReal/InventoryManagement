import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIWvYRj5DfsfeCxeozEUSSUjGjB80KhUM",
  authDomain: "inventory-management-8872a.firebaseapp.com",
  projectId: "inventory-management-8872a",
  storageBucket: "inventory-management-8872a.appspot.com",
  messagingSenderId: "727626091549",
  appId: "1:727626091549:web:2ca302ccdc47083a9e8af4",
  measurementId: "G-GW0ZYHPR8T"
};

let firestore;

if (typeof window !== 'undefined') {
  const app = initializeApp(firebaseConfig);
  firestore = getFirestore(app);
}

export { firestore };

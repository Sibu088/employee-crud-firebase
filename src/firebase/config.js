import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuAKhphrcvPqHJGZIlNCxtiRim1KwECB4",
  authDomain: "employee-crud-app-f50e9.firebaseapp.com",
  projectId: "employee-crud-app-f50e9",
  storageBucket: "employee-crud-app-f50e9.firebasestorage.app",
  messagingSenderId: "658631027357",
  appId: "1:658631027357:web:0a6e59f4bc8ab0a1c18274",
  measurementId: "G-SBNV8VT7XC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

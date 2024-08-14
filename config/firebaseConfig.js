// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBh9lY4uQEpias2JSpBcR5I_cfGgPynXn0",
  authDomain: "what-to-eat-1pm.firebaseapp.com",
  projectId: "what-to-eat-1pm",
  storageBucket: "what-to-eat-1pm.appspot.com",
  messagingSenderId: "1042454526888",
  appId: "1:1042454526888:web:a9dd63e8a7722aabfcbb9d",
  measurementId: "G-LSVX8M2Z1G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Check if window is defined before initializing analytics
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}
// Initialize Firestore
const db = getFirestore(app);

export { db };

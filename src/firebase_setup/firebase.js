// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzIh5nnEgJRmRlPr-iqV_BTGrQke-HF3E",
  authDomain: "smart-energy-systems-65a6b.firebaseapp.com",
  projectId: "smart-energy-systems-65a6b",
  storageBucket: "smart-energy-systems-65a6b.appspot.com",
  messagingSenderId: "909682752197",
  appId: "1:909682752197:web:5f9e7396599ec0b6570eac",
  measurementId: "G-F77FX14NQT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
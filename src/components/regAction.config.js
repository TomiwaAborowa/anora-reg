import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDotIsVERgnFK27pZjWJYbjUPAfseZoJOo",
  authDomain: "anoraregsite.firebaseapp.com",
  projectId: "anoraregsite",
  storageBucket: "anoraregsite.appspot.com",
  messagingSenderId: "724068484282",
  appId: "1:724068484282:web:d5177f9c3b5fed1f9fee83",
  measurementId: "G-4VEC1L19W8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const docFile = getStorage(app);
const txtFile = getFirestore(app);


export {docFile, txtFile}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB_pX1uXjxz8pO6nKgP1xLCe2ynpb9OOZ8",
  authDomain: "video-52870.firebaseapp.com",
  projectId: "video-52870",
  storageBucket: "video-52870.appspot.com",
  messagingSenderId: "588179786893",
  appId: "1:588179786893:web:20d856f12fc99fc7ec66c4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;

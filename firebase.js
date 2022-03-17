// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS0uJex0inj--dT5xweHdgBSn4QRz7dvM",
  authDomain: "instaclone-3ae43.firebaseapp.com",
  projectId: "instaclone-3ae43",
  storageBucket: "instaclone-3ae43.appspot.com",
  messagingSenderId: "1011273473192",
  appId: "1:1011273473192:web:4c3d4f58debb66e7cd769d",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };

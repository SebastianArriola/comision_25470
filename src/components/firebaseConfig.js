// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq3YmCE7p7FlXMx3aJ6HEFfdZbodh8KJo",
  authDomain: "comision-25470-c97f7.firebaseapp.com",
  projectId: "comision-25470-c97f7",
  storageBucket: "comision-25470-c97f7.appspot.com",
  messagingSenderId: "953745059303",
  appId: "1:953745059303:web:8a4ab6ee70eb5b4dc16142"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
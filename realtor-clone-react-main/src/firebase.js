// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClLVsGcs_Kk5B5uXid65Sc5eN19sBkm6M",
  authDomain: "realtor-clone-react-6c261.firebaseapp.com",
  projectId: "realtor-clone-react-6c261",
  storageBucket: "realtor-clone-react-6c261.appspot.com",
  messagingSenderId: "120819868019",
  appId: "1:120819868019:web:19ac26a2d7ba837c852506"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
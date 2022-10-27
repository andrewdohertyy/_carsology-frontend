// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore, collection, getDocs} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzUL0Rx5mgHn8lSerR3KB2q0Ww0Bmt_ys",
  authDomain: "carsology.firebaseapp.com",
  projectId: "carsology",
  storageBucket: "carsology.appspot.com",
  messagingSenderId: "778849303086",
  appId: "1:778849303086:web:7c478ebb3b239f68187dbf",
  measurementId: "G-BGZRN06PJW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//get access to firestore

const firestore = getFirestore(app)

export {firestore, }
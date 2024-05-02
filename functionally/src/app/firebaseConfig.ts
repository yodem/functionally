// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import {
  Firestore,
  collection,
  doc,
  getDocs,
  getFirestore,
  writeBatch,
} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCEfOUxx7PEJFH6VIhoFmPk0h5_gXG068Y',
  authDomain: 'functionally-9ae03.firebaseapp.com',
  projectId: 'functionally-9ae03',
  storageBucket: 'functionally-9ae03.appspot.com',
  messagingSenderId: '1019367030967',
  appId: '1:1019367030967:web:0f22b3672e47e3f7a24d32',
  measurementId: 'G-MQPNK3SSNR',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db: Firestore = getFirestore(app); // Explicitly typed

export { db };

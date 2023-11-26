// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAxsQ3q_CG3wYKx0puNTlcaml0C3pOtOGo',
  authDomain: 'groovydev-7b8e8.firebaseapp.com',
  projectId: 'groovydev-7b8e8',
  storageBucket: 'groovydev-7b8e8.appspot.com',
  messagingSenderId: '1037553387827',
  appId: '1:1037553387827:web:ca755a96655d04f9bf5646',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

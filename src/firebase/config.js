import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';



const firebaseConfig = {
  apiKey: "AIzaSyAnfhGYcg4qF0QfuhwsJ9rEVrzOfpnZE4g",
  authDomain: "frizbi-teknik.firebaseapp.com",
  projectId: "frizbi-teknik",
  storageBucket: "frizbi-teknik.appspot.com",
  messagingSenderId: "341635801265",
  appId: "1:341635801265:web:bc788a681aa1a5e73fc290",
  measurementId: "G-XK6Z8X6KJG"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore,fire,timestamp};
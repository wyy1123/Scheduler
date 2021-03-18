import firebase from "firebase/app";
import "firebase/database";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBvsDmkxHiEc_5ruwybNUr0uw5cLrIf2kY",
    authDomain: "scheduler-3b3d6.firebaseapp.com",
    databaseURL: "https://scheduler-3b3d6-default-rtdb.firebaseio.com",
    projectId: "scheduler-3b3d6",
    storageBucket: "scheduler-3b3d6.appspot.com",
    messagingSenderId: "252232679466",
    appId: "1:252232679466:web:8bbc19f90fec8cd00c8353"
  };

firebase.initializeApp(firebaseConfig);

export { firebase }; 
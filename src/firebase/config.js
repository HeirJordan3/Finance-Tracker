import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBywwpp-ulRkRpnuPJVPHB64Ezi2a4MHlQ",
    authDomain: "financetracker-f2a4c.firebaseapp.com",
    projectId: "financetracker-f2a4c",
    storageBucket: "financetracker-f2a4c.appspot.com",
    messagingSenderId: "9629403331",
    appId: "1:9629403331:web:40dee55b3629ec37c67a76"
  };

//initialize firebase
firebase.initializeApp(firebaseConfig);

//init firestore service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
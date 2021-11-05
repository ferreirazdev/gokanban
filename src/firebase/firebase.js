import firebase from 'firebase/compat';


const firebaseConfig = {
  apiKey: "AIzaSyDnbZq4pT1rRfnfN9DB01GIc7SuHjiJa9s",

  authDomain: "gokanban-88202.firebaseapp.com",

  projectId: "gokanban-88202",

  storageBucket: "gokanban-88202.appspot.com",

  messagingSenderId: "159433485814",

  appId: "1:159433485814:web:05c3b7d66ccbf5b422ebd7",

  measurementId: "G-9QS11RVYLG"

};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();

export { auth };
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBTrDdlewLNuAVZ751VW6EpF4x-rhKKqjo",
  authDomain: "tinder-clone-ac968.firebaseapp.com",
  databaseURL: "https://tinder-clone-ac968.firebaseio.com",
  projectId: "tinder-clone-ac968",
  storageBucket: "tinder-clone-ac968.appspot.com",
  messagingSenderId: "272348202071",
  appId: "1:272348202071:web:5d53bd0e8d7e9640ddcf12",
  measurementId: "G-X7Q2LKJGP3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;

import firebase from "firebase/app"; // new version 'firebase/compact/app'
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpVyfFkB1EzvL5E1Mv-4Tiw4C77neiXSo", // connect to firebase
  authDomain: "music-a53ec.firebaseapp.com",
  projectId: "music-a53ec",
  storageBucket: "music-a53ec.appspot.com", // where to store
  // messagingSenderId: "814928902941", // not using in this project
  appId: "1:814928902941:web:0bc51d1a994289a0e97ff4",
};

// Initialize FireBase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection("users");

export { auth, db, usersCollection };

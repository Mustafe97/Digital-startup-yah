import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance
export const db = firebase
    .initializeApp({
        apiKey: "AIzaSyBslMmuCDI3kMdVsMDM2j3cwHtP2oU7VjY",
    authDomain: "digital-startup-yah.firebaseapp.com",
    databaseURL: "https://digital-startup-yah.firebaseio.com",
    projectId: "digital-startup-yah",
    storageBucket: "digital-startup-yah.appspot.com",
    messagingSenderId: "168480843179",
    appId: "1:168480843179:web:9d1f932f78aef6f6aa5eee"
    })
    .firestore();

export const postRef = db.collection("posts");
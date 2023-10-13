import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAduqb6jC3Ztz8VSlaMeplqQNQSevgY7gI",
    authDomain: "whatisthissong-d044a.firebaseapp.com",
    databaseURL: "https://whatisthissong-d044a-default-rtdb.firebaseio.com",
    projectId: "whatisthissong-d044a",
    storageBucket: "whatisthissong-d044a.appspot.com",
    messagingSenderId: "88905956358",
    appId: "1:88905956358:web:866861e418b95281909787",
    measurementId: "G-TFMG4SCBCF",
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

export const db = firebase.firestore();

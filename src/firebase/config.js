import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDR-t5Jk1nvfVo7qZT3IRCNGKr6oUFMdF8",
    authDomain: "firegram-29998.firebaseapp.com",
    databaseURL: "https://firegram-29998.firebaseio.com",
    projectId: "firegram-29998",
    storageBucket: "firegram-29998.appspot.com",
    messagingSenderId: "729511949948",
    appId: "1:729511949948:web:9ba22787ac5f3da31c3bf9",
    measurementId: "G-0MEY2GH440"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
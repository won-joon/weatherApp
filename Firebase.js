import firebase from "firebase/app";
//import "firebase/auth";
import "firebase/firestore";
//import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDlV4VGyUG7CcNeCrVne_Xq6L9dmdqvYOU",
    authDomain: "weatherapp-86901.firebaseapp.com",
    databaseURL: "https://weatherapp-86901.firebaseio.com",
    projectId: "weatherapp-86901",
    storageBucket: "weatherapp-86901.appspot.com",
    messagingSenderId: "154804522133",
    appId: "1:154804522133:web:73b2bb0f654f0f49be5f9c"
};

firebase.initializeApp(firebaseConfig);

//export const firebaseInst = firebase;
//export const auth = firebase.auth();
export const db = firebase.firestore();
//export const storage = firebase.storage();
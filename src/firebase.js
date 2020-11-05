import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyC-MP3tqBekZkp4cECeFIh9PFWA_hykaSM",
        authDomain: "facebook-messenger-clone-9e5e5.firebaseapp.com",
        databaseURL: "https://facebook-messenger-clone-9e5e5.firebaseio.com",
        projectId: "facebook-messenger-clone-9e5e5",
        storageBucket: "facebook-messenger-clone-9e5e5.appspot.com",
        messagingSenderId: "821689215716",
        appId: "1:821689215716:web:10c3d4e6696eeb1ba35af1",
        measurementId: "G-22EY104Y3D"
     
});

const db = firebaseApp.firestore();
export default db;
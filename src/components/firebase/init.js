import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDprNaUGRr7FD0vXmWzeaQ2Wl9DM7Ycnyk",
    authDomain: "health-forum-826f9.firebaseapp.com",
    databaseURL: "https://health-forum-826f9.firebaseio.com",
    projectId: "health-forum-826f9",
    storageBucket: "health-forum-826f9.appspot.com",
    messagingSenderId: "561998566475",
    appId: "1:561998566475:web:7cb7819d4ef9235066e9ce",
    measurementId: "G-H270QSHS4P"

});

const db = firebaseApp.firestore();

export { firebaseApp,db };
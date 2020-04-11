import app from "firebase/app";
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDprNaUGRr7FD0vXmWzeaQ2Wl9DM7Ycnyk",
  authDomain: "health-forum-826f9.firebaseapp.com",
  databaseURL: "https://health-forum-826f9.firebaseio.com",
  projectId: "health-forum-826f9",
  storageBucket: "health-forum-826f9.appspot.com",
  messagingSenderId: "561998566475",
  appId: "1:561998566475:web:7cb7819d4ef9235066e9ce",
  measurementId: "G-H270QSHS4P"
};


class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.state = {
      login: false
    }
  }

  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();
}

export default Firebase;


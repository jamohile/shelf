import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApKWqp_vjS5sdqrJ_5gOvjDwwUygePZic",
  authDomain: "shelf-4c13c.firebaseapp.com",
  databaseURL: "https://shelf-4c13c.firebaseio.com",
  projectId: "shelf-4c13c",
  storageBucket: "shelf-4c13c.appspot.com",
  messagingSenderId: "643024071296",
  appId: "1:643024071296:web:de415b25c85269d8d6d465",
  measurementId: "G-09DE3ZHQQY",
};
firebase.initializeApp(firebaseConfig);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)

ReactDOM.render(<App />, document.getElementById("root"));

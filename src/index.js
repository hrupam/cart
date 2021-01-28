import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import * as firebase from "firebase";
import firebase from "firebase/app";

// import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC9zNNMHdC89-AzbREi3bLmC-a8UXfmZE8",
  authDomain: "cart-5f4d8.firebaseapp.com",
  projectId: "cart-5f4d8",
  storageBucket: "cart-5f4d8.appspot.com",
  messagingSenderId: "861041764836",
  appId: "1:861041764836:web:8677ee68c51f224ccafff1",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

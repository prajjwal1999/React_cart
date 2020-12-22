import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app'
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDS1jnPDyJTsmGEMKLAVEPR8b2Tf-gZXo8",
  authDomain: "cart-21162.firebaseapp.com",
  projectId: "cart-21162",
  storageBucket: "cart-21162.appspot.com",
  messagingSenderId: "1076190198034",
  appId: "1:1076190198034:web:de77e57ab3a83cac111bcb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

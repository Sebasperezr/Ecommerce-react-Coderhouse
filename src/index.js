import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_Q2TFT2buBoTXsz8P4xG7gwCYGv_4YuY",
  authDomain: "morita-ecommerce.firebaseapp.com",
  projectId: "morita-ecommerce",
  storageBucket: "morita-ecommerce.appspot.com",
  messagingSenderId: "929454780031",
  appId: "1:929454780031:web:a64f2120f4340d850dd94a",
  measurementId: "G-SZE40019T1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log(app?.name)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

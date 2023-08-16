import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCBTBF6kSLMFZzjA3EEGySwohFTQZuP04w",
  authDomain: "coder-react-88e8c.firebaseapp.com",
  projectId: "coder-react-88e8c",
  storageBucket: "coder-react-88e8c.appspot.com",
  messagingSenderId: "900609715909",
  appId: "1:900609715909:web:2df1e2119016efa70b4aac"
};

initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

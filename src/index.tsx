import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import FirebaseAppProvider from './firebase-auth/Firebase_app_provider';
import { firebaseConfig } from './config/firebase-config';
import App from './App';
import { FirebaseUserProvider } from './firebase-auth/Firebase_user_provider';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider config={firebaseConfig} name="portfolio" >
      <FirebaseUserProvider config={firebaseConfig} name="portfolio">
        <App />
      </FirebaseUserProvider>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

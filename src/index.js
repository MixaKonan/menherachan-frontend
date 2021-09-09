import React from 'react';
import ReactDOM from 'react-dom';
import './wwwroot/css/site.css';
import './wwwroot/css/login.css';
import './wwwroot/css/style.css';
import './wwwroot/css/signed.css';
import './wwwroot/css/styles.css';
import App from './App';
import axios from "axios";

axios.defaults.headers['Accept'] = '*/*';
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

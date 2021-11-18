/* 전역으로 쓰는거 불러옴 */
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/all.min.css';
import './assets/css/base.css';
import './assets/css/bootstrap.min.css';
import App from './App'; // App.js
import reportWebVitals from './reportWebVitals'; // 상태체크

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);

reportWebVitals();

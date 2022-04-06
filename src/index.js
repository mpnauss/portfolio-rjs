import React from 'react';
import ReactDOM from 'react-dom';
import '../src/stylesheets/baseStyles.css'
import '../src/stylesheets/destyle.css'
// import './index.css';
import Portfolio from './components/Portfolio'
// import App from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

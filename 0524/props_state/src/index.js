import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function showAlert (){
  alert('경고창 출력!');
};

ReactDOM.render(
  <div>
    <App id="app1" click={showAlert}>내용1</App>
    <App id="app1" click={showAlert}>내용2</App>
    <App id="app1" click={showAlert}>내용3</App>
    <App id="app1" click={showAlert}>내용4</App>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
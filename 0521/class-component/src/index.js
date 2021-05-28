import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RourndButton from './App';
ReactDOM.render(
  <div>
    <RourndButton id="btn1">버튼1</RourndButton>
    <RourndButton id="btn2">버튼2</RourndButton>
    <RourndButton id="btn3">버튼3</RourndButton>
    <RourndButton id="btn4">버튼4</RourndButton>
    <RourndButton id="btn5">버튼5</RourndButton>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

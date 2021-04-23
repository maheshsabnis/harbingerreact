import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PeroductServiceComponent from './components/productscomponents.jsx';
import PromiseChaninComponent from  './components/promisechaincomponent.jsx';
import PromiseAllComponent from './components/PromiseAllComponent.jsx';
import ContainerComponent from './components/errordemocomponent';
import ContainerWithErrorBoundryComponent from './components/errorboundryComponent';
let data = "Mahesh";
ReactDOM.render(
  <React.StrictMode>
    <ContainerWithErrorBoundryComponent/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

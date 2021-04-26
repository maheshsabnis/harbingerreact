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
import SimpleFunctionalComponent from './hooks/simplefuncitonalcomponent';
import FunctionalComponentWithProps from './hooks/FunctionalComponentWithProps';
import StateComponent from './hooks/StateCompponent';
let data = "Mahesh";
ReactDOM.render(
  <React.StrictMode>
    <StateComponent/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

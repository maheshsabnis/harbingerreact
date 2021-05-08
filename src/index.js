import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
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
import ToggleComponent from './hooks/useEffectDemo/ToggleComponent';
import CustomHookComponent from './hooks/customhookcomponent';
import { BrowserRouter } from 'react-router-dom';
import RouterContainerComponent from './routingapp/routercontainercomponent';
import UtilizerComponent from './codesplit/utilizercomponent';
import LazyLoadHandlerComponent from './codesplit/liazyloadHandlerComponent';
let data = "Mahesh";
ReactDOM.render(
  <React.StrictMode>
    <LazyLoadHandlerComponent></LazyLoadHandlerComponent>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { createStore } from "redux";
import { Provider } from "react-redux";

import reportWebVitals from './reportWebVitals';
import MainReduxComponent from './reduxapp/maincomponent';
import reducers from "./reduxapp/reducers/index";

// create a store using 'createStore()' method

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());

 
ReactDOM.render(
  <React.StrictMode>
    {/* The Provider will provide the store subscription for all components executing in it */}
    <Provider store={store}>
      <MainReduxComponent/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

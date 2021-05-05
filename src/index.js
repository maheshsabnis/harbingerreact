import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
// importing the thunk
import thunk from 'redux-thunk';
// import reducers
import rootReducer from './reduxthunkapp/reducres/index'
import reportWebVitals from './reportWebVitals';
import MainReducThunkComponent from './reduxthunkapp/components/MainReduxThunkComponent'; 
// import redux devtools to simulate redux with thunk in browser (MUST BE AOIDED IN PRODUCTSION)
import { composeWithDevTools } from "redux-devtools-extension";

// create a store using 'createStore()' method
// and pass the composeWithDevTools for applying middleware to it
// the 'thunk' object will monitor all async action excutions
let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

 
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainReducThunkComponent/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

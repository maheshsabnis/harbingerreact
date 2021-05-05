import { combineReducers } from "redux";

import productsReducer from './getproductreducer';

// expport conbine reducer
// the 'products' represent the state to be modified in store
const  rootReducer= combineReducers({
    products: productsReducer
});

export default rootReducer;
import { combineReducers } from "redux";

import productsReducer from './getproductreducer';
import postProductReducer from './postproductreducer';

// expport conbine reducer
// the 'products' represent the state to be modified in store
const  rootReducer= combineReducers({
    products: productsReducer,
    newProduct: postProductReducer
});

export default rootReducer;
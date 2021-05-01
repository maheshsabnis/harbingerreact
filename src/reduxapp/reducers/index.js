import { combineReducers } from "redux";
import {productsReducer} from './reducers'

// the Key:value is explained as follows
// key: is the current state in Store
// value: is the the reducer taht is updating the store to the new state
const reducers = combineReducers({
    products:productsReducer
})

export default reducers;
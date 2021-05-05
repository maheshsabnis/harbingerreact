// import all actions
import * as actions from './../actions/actions';

// define an initial state for teh store

export const intialState = {
    loading:false, // flag for waiting for the response
    hasErrors: false, // this has to set to true if the action returns error
    products:[] // the state to be updated in store
};

// define a reducer function

// pass state and action
export default function productsReducer(state = intialState,action){
    switch(action.type){
        case actions.GET_PRODUCTS:
             console.log('Initiating the action');
             // return the default state
             return {...state, loading:true};
        case actions.GET_PRODUCTS_SUCCESS:
            console.log(`call success ${JSON.stringify(action.payload)}`);
            return {products:action.payload, loading:false, hasErrors:false};
        case actions.GET_PRODUCTS_FAILED:
            console.log('call failed');
            return {...state, loading:false,hasErrors:true};
        default:
                return state; // returns the default state             
    }
}
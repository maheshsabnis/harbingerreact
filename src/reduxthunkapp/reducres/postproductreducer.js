import * as actions from './../actions/postActions'

export const intialState = {
    loading:false, // flag for waiting for the response
    hasErrors: false, // this has to set to true if the action returns error
    products:{} // the state to be updated in store
};

export default function postProductReducer(state=intialState, action){
    switch(action.type){
        case actions.POST_PRODUCT:
             console.log('Initiating the action');
             return {...state, loading:true};
        case actions.POST_PRODUCT_SUCCESS:
            return {product:action.payload, loading:false, hasErrors:false};
        case actions.POST_PRODUCT_FAILED:
            console.log('call failed');
            return {...state, loading:false,hasErrors:true};
        default:
                return state; // returns the default state             
    }
}
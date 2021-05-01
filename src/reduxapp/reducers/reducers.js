
import { ADD_PRODUCT } from "./../actions/actions";
// the state=[] is initial state that will be updated based on action type

export const productsReducer=(state=[], action)=>{
    switch(action.type){
        case ADD_PRODUCT:
            // update the state based on payload returned from the method
            return [...state, action.payload];
        default:
            return state;        
    }
}; 


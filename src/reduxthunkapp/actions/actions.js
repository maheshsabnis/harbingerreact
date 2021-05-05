import {ProductHttpService} from './../../service/producthttpservice';
// action type constants
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILED = 'GET_PRODUCTS_FAILED';

// actions witj action creators
// Initiating Action
export const getProducts=()=>({type:GET_PRODUCTS}); 

// SUCCESS Output action with payload
export const  getProductsSuccess=products=>({
    type: GET_PRODUCTS_SUCCESS,
    payload:products
});

// FAILURE Action
export const getProductsFailed=error=>({
    type:GET_PRODUCTS_FAILED,
    payload:error
});

// an action creator that will be executed from the dispath request received from the UI aka component

export function fetchProducts(){
    console.log('The Dispatch Request is received');
    // dispatch is an object that will be executed 
    // under the redux with context to listen the dispatch request
    // so that against the request an action is distach request
    // is processed and it is executed
   
        return async dispatch=>{
            // dispatch the action
            dispatch(getProducts()); // the Initiating action
            const serv = new ProductHttpService();
            try {
                // wait for the response received from External calls
                // the async call will be subscribed
                // and based on the result either success or failed action
                // will be dispatched 
                const response = await serv.getProducts();
                const data = response.data;
                // dispatch the success action
                dispatch(getProductsSuccess(data)); 

            }catch(e){
                  // dispatch the failure action
                  dispatch(getProductsFailed(e.message));  
            }
        };
    
}

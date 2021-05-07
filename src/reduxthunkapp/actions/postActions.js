import {ProductHttpService} from './../../service/producthttpservice';

export const POST_PRODUCT = 'POST_PRODUCT';
export const POST_PRODUCT_SUCCESS = 'POST_PRODUCT_SUCCESS';
export const POST_PRODUCT_FAILED = 'POST_PRODUCT_FAILED';


// action creators
export const postProduct=(product)=>({type:POST_PRODUCT});

export const postProductSuccess=product=>({
    type:POST_PRODUCT_SUCCESS,
    payload:product
});

export const postProductFaild=()=>({type:POST_PRODUCT_FAILED});

export function requestPostProduct(prod){
    return async dispatch=>{
        dispatch(postProduct(prod));
        const serv = new ProductHttpService();
        try{
            const response = await serv.postProducts(prod);
            const data = response.data;
            dispatch(postProductSuccess(data));
        }catch(e){
            dispatch(postProductFaild());
        }
    };
}
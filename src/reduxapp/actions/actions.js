export const ADD_PRODUCT = 'ADD_PRODUCT';
const addProduct=(product)=>{
    console.log(`Action is dispatched with Data =  ${JSON.stringify(product)}`);
    // some logic here
    product.ProductName = product.ProductName.toUpperCase(); 
    return {
        type: ADD_PRODUCT,
        payload:product
    };
};

export default addProduct;
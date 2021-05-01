import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import AddProductComponent from './views/addProductComponent';
import ListProductsComponent from './views/listproductscomponent';
import addProduct from './actions/actions';
const MainReduxComponent=()=>{

    // initialze the dispatch object that will be used to dispatch action
    let dispatch = useDispatch();

    // since the MainReduxComponent executes under the Provider and has store subscription, this store will be available across all components executed as children under the MainReducOmponent
    
    // subscribe to the store and read the state

    let productsList = useSelector(state=>state.products);

    return (
        <div>
            <h1>The Simple Rexdux App</h1>
            {/* Dispatch AddProduct action from the AddProductComponent*/}
            <AddProductComponent
             AddProduct={(product)=>dispatch(addProduct(product))}
            ></AddProductComponent>
            <hr/>
            {/* Passing the State from the store to the ListProductsComponent */}
            <ListProductsComponent products={productsList}></ListProductsComponent>
        </div>
    );
};


export default MainReduxComponent;
import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { fetchProducts } from "./../actions/actions";
import { requestPostProduct } from "./../actions/postActions";
// dispatch, will be passed by the redux context under which
// the current compoent is executing (NOT: You can use 'useDispatch()' hook) 
// loading, products and hasError are the states from reducer
const ListProductsComponent=({dispatch,loading, products, hasErrors, product})=>{
  
    // dispth the action using 'useEffect'
    useEffect(()=>{
        dispatch(fetchProducts());
    }, [dispatch]); // once the dispatch is completed stop an execution of useEffct()

    const save=()=>{
        let prod = {
            ProductId: 'Prd9001',
            ProductName: 'CHarger',
            CategoryName: 'Electrical',
            Manufacturer: 'Apple',
            Description: 'Fast Apple Charger',
            BasePrice:2300
        };
        dispatch(requestPostProduct(prod));
    };

   
  const renderUI=()=>{
      if(loading) return (<p>Loading Products......</p>);
      if(hasErrors) return (<p>Some Error Occured......</p>);
      if(products === undefined || products.length === 0 ) 
        return(<p> No Records to Display</p>);
     
    return products.map((prd,idx)=>(
          <p key={idx}>{JSON.stringify(prd)}</p>  
        ));
        
  };
  const createdProductUI=()=>{
      if(product === undefined) {
        return (<div>No Product Added Yet</div>);
      } 
      return (<div>{JSON.stringify(product)}</div>);
  }
  return (
      <div>
          <h1>List of Products</h1>
          {renderUI()}
          <hr />
          <input type="button" value="Post Data" onClick={save}/>
          <hr />
          <strong>Newly Added Product</strong>
          <br />
          {createdProductUI()}
      </div>
  );
};

// define an object of name 'mapStateToProps'
// thismobject will map the state from Redux store with
// props of the current component

// the 'products' is a combibe reducer that will provide state 
const mapStateToProps = state=>({
    loading: state.products.laoding,
    products: state.products.products, // the received data
    hasErrors:state.products.hasErrors, // errors
    product:state.newProduct.product
});

// connect the component with the store using connect() method
export default connect(mapStateToProps,null)(ListProductsComponent);
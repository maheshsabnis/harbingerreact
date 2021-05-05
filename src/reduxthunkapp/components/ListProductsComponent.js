import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { fetchProducts } from "./../actions/actions";

// dispatch, will be passed by the redux context under which
// the current compoent is executing (NOT: You can use 'useDispatch()' hook) 
// loading, products and hasError are the states from reducer
const ListProductsComponent=({dispatch,loading, products, hasErrors})=>{
  
    // dispth the action using 'useEffect'
    useEffect(()=>{
        dispatch(fetchProducts());
    }, [dispatch]); // once the dispatch is completed stop an execution of useEffct()


   
  const renderUI=()=>{
      if(loading) return (<p>Loading Products......</p>);
      if(hasErrors) return (<p>Some Error Occured......</p>);
      if(products === undefined || products.length === 0 ) 
        return(<p> No Records to Display</p>);
     
    return products.map((prd,idx)=>(
          <p key={idx}>{JSON.stringify(prd)}</p>  
        ));
        
    
  };
  return (
      <div>
          <h1>List of Products</h1>
          {renderUI()}
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
    hasErrors:state.products.hasErrors // errors
});

// connect the component with the store using connect() method
export default connect(mapStateToProps,null)(ListProductsComponent);
import React, { useState } from 'react';

const AddProductComponent=(props)=>{
    const [product, setProduct] = useState({ProductId:0,ProductName:''});
    const save=()=>{
        props.AddProduct(product);
    };

    const clear=()=>{
        setProduct({ProductId:0,ProductName:''});
    }
    return(
        <div>
            <div>
                Product Id: 
                <input type="text"
                 value={product.ProductId}
                 onChange={(evt)=>setProduct({...product, ProductId:parseInt(evt.target.value)})}/>
            </div>
            <div>
                Product Name: 
                <input type="text"
                 value={product.ProductName}
                 onChange={(evt)=>setProduct({...product, ProductName:evt.target.value})}/>
            </div>
            <div>
                <input type="button" value="save" onClick={save}/>
                <input type="button" value="clear" onClick={clear}/>
            </div>
        </div>
    );
};

export default AddProductComponent;
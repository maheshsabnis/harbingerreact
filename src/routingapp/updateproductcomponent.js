import React,{useState, useEffect} from 'react';
import { ProductHttpService } from '../service/producthttpservice';

const UpdateProductComponent=(props)=>{
    const [product, setProduct] = useState({
        ProductRowId:0, ProductId:'', ProductName:'', CategoryName:'', Manufacturer:'', Description:'', BasePrice:0
    });
    const serv = new ProductHttpService();

    const clear=()=>{
        setProduct({
            ProductRowId:0, ProductId:'', ProductName:'', CategoryName:'', Manufacturer:'', Description:'', BasePrice:0
        });
    };

    useEffect(()=>{
        // read URL Parameter
        let id = props.match.params.id;
        serv.getProductById(id).then((resp)=>{
            setProduct(resp.data);
        }).catch((err)=>{
            console.log(`Error Ocured ${err}`);
        });
    },[]); 


    const save=()=>{
        serv.postProducts(product).then((resp)=>{

        }).catch((error)=>{
            console.log(`Error Ocured ${error}`);
        });
    };

    return(
        <div className="container">
            <div className="form-group">
                <label>Product Id</label>
                <input type="text" className="form-control"
                 value={product.ProductId} onChange={(evt)=>setProduct({...product, ProductId:evt.target.value})}/>
            </div>
            <div className="form-group">
                <label>Product Name</label>
                <input type="text" className="form-control"
                value={product.ProductName} onChange={(evt)=>setProduct({...product, ProductName:evt.target.value})}/>
            </div>
            <div className="form-group">
                <label>Category Name</label>
                <input type="text" className="form-control" value={product.CategoryName} onChange={(evt)=>setProduct({...product, CategoryName:evt.target.value})}/>
            </div>
            <div className="form-group">
                <label>Manufacturer</label>
                <input type="text" className="form-control" value={product.Manufacturer} onChange={(evt)=>setProduct({...product, Manufacturer:evt.target.value})}/>
            </div>
            <div className="form-group">
                <label>Description</label>
                <input type="text" className="form-control" value={product.Description} onChange={(evt)=>setProduct({...product, Description:evt.target.value})}/>
            </div>
            <div className="form-group">
                <label>Base Price</label>
                <input type="text" className="form-control" value={product.BasePrice} onChange={(evt)=>setProduct({...product, BasePrice:parseInt(evt.target.value)})}/>
            </div>
            <div className="form-group">
                <input type="button" value="Clear" className="btn btn-primary"
                 onClick={clear}/>
                <input type="button" value="Save" className="btn btn-success"
                 onClick={save}/>
            </div>
        </div>
    );
};

export default UpdateProductComponent;

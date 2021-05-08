import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { ProductHttpService } from "./../service/producthttpservice";
const ListProductsComponent=()=>{
    const [products, updateProducts] = useState([]);
    const serv = new ProductHttpService();

    useEffect(()=>{
        serv.getProducts().then((resp)=>{
            updateProducts(resp.data);
        }).catch((err)=>{
            console.log(`Error Occured`);
        });
        return ()=>{
            console.log('List COmponent is unmounted'); 
        }
    },[]);

    if(products === undefined || products.length === 0){
        return (
            <div className="container">No Records to search</div>
        );
    } else {
        return (
            <div>
                <h2>The Table Component</h2>
                <div>
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                {
                                    Object.keys(products[0]).map((c,i)=>(
                                        <th key={i}>{c}</th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((row,idx)=>(
                                    <tr key={idx}>
                                        {
                                            Object.keys(products[0]).map((c,i)=>(
                                                <td key={i}>{row[c]}</td>
                                            ))
                                        }
                                        <button className="btn btn-warning">
                                            <Link to={`/edit/${row.ProductRowId}`}>Edit</Link>
                                        </button>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

};

export default ListProductsComponent;
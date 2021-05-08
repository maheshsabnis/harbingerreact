import React from 'react';
import { Link, Switch,Redirect,Route } from "react-router-dom";
import CreateProductComponent from './createproductcomponent';
import ListProductsComponent from './listproductscomponent';
import UpdateProductComponent from './updateproductcomponent';
const RouterContainerComponent=()=>{

    return(
        <div className="container">

            <table className="table table-bordered table-striped">
                <tbody>
                    <tr>
                        <td>
                            <Link to="/">List Products</Link>
                        </td>
                        <td>
                            <Link to="/create">Create</Link>
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* The Route Dictionary */}
            <Switch>
                <Route exact path="/" component={ListProductsComponent}></Route>
                <Route exact path="/create" component={CreateProductComponent}/>
                <Route exact path="/edit/:id" component={UpdateProductComponent}></Route>
            </Switch>
        </div>  
    );
};

export default RouterContainerComponent;
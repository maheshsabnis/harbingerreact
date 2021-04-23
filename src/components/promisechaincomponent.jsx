import React, { Component } from 'react';
import { HttpService } from "./../service/httpservice.js";
class PromiseChaninComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };

        this.serv = new HttpService();
    }

    componentDidMount(){
        // Promise Chains
        this.serv.getCategories().then((cats)=>{
            console.log(`Categories ${JSON.stringify(cats.data)}`);
            this.serv.getProducts().then((prds)=>{
                console.log(`Products ${JSON.stringify(prds.data)}`);
            }).catch((err)=>{
                console.log(`Inner Products Error ${err}`);
            });
        }).catch((error)=>{
                console.log(`Outer Category Error ${error}`);
        });
    }

    render() { 
        return ( 
        <div>Chains</div> 
        );
    }
}
 
export default PromiseChaninComponent;
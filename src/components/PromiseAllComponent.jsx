import React, { Component } from 'react';
import { HttpService } from "./../service/httpservice.js";
class PromiseAllComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };

        this.serv = new HttpService();
    }

    componentDidMount(){
        let catPromise = this.serv.getCategories();
        let prdPromise = this.serv.getProducts();
        Promise.all([catPromise, prdPromise])
            .then((responses)=>{
                 // array of Promise Responses
                 console.log(`Categories ${JSON.stringify(responses[0].data)}`);
                 console.log(`Products ${JSON.stringify(responses[1].data)}`);
            }).catch((error)=>{
                console.log('Errorrrrrrr');
            }); 
    }

    render() { 
        return ( 
        <div>Chains</div> 
        );
    }
}
 
export default PromiseAllComponent;
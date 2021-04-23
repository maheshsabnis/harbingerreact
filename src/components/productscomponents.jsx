import React, { Component } from 'react';
import { ProductHttpService } from "./../service/producthttpservice";
// class component
class PeroductServiceComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            products:[],
            prd:{}
        };
        this.serv = new ProductHttpService();
    }
    componentDidMount(){
         this.serv.getProducts()
            .then((response)=>{
                console.log(`Received Response ${JSON.stringify(response.data)}`);
                // mutate the privious state by new state
                this.setState({products:response.data});
            })
            .catch((error)=>{
                console.log(`Error Occured ${error}`);
            });   
    }

    save(){
        const prd = {
             "ProductId":"Prd7002","ProductName":"Extension Box","Manufacturer":"Bajaj","CategoryName":"Electrical","Description":"Power Extension","BasePrice":2000  
        };
         this.serv.postProducts(prd)
            .then((response)=>{
                console.log(`Received Response ${JSON.stringify(response.data)}`);
                // mutate the privious state by new state
                this.setState({prd:response.data},()=>{
                    console.log(`Product Created Successfully ${JSON.stringify(this.state.prd)}`)
                });
            })
            .catch((error)=>{
                console.log(`Error Occured ${error}`);
            });      
    }
    render() { 
        if(this.state.products === undefined || this.state.products.length === 0){
            return (
                <div>
                  No Records Received
                </div>
            )
        } else {
        return (  
           <div>
              <input type="button" value="Save" onClick={this.save.bind(this)}/>
              <h2>The Service Calls</h2>
              {
                  JSON.stringify(this.state.products)
              }
           </div>
        );
        }
    }
}
 
export default PeroductServiceComponent;
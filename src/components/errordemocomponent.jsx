import React, { Component, isValidElement } from 'react'

class CounterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            counter:0
        };
        console.log('Counter Component Constructor Called');
    }

    increment=()=>{
        this.setState({counter: this.state.counter +1},()=>{});
    }

    componentDidMount=()=>{
        console.log('Counter Component is mounteds');
    }

    componentDidUpdate=()=>{
        console.log('Counter Component is updated');
    }

    render() { 
       try{
           if(this.state.counter === 10){
               throw new Error('You have reached to max value');
           } else {
            return (  
                <div>
                    <h2>The Counter Component</h2>
                    <strong>
                        The Counter values = {this.state.counter}
                    </strong>
                    <br/>
                    <input type="button" value="Increment"
                     onClick={this.increment.bind(this)}/>
                </div> 
            );
          }
       }catch(e){
            return (
                <div>
                    <h2>The Fallback UI {e.message}</h2>
                </div>
            );
       }
    }
}

class OneMoreComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <strong>
                    I am One More Component
                </strong>
            </div>
         );
    }
}
 
 


class ContainerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        console.log('Container Component Constructor Called');
    }
    reload=()=>{
        window.history.go(0);
    }
    componentDidMount=()=>{
        console.log('Container Component is mounteds');
    }

    componentDidUpdate=()=>{
        console.log('Container Component is updated');
    }
    render() { 
        return (
            <div>
                <h2>The Container Component</h2>
                <CounterComponent></CounterComponent>
                <hr/>
                <OneMoreComponent></OneMoreComponent>
                <hr/>
                <input type="button" value="Reload"
                 onClick={this.reload.bind(this)}/>
            </div>

          );
    }
}
 
export default ContainerComponent;
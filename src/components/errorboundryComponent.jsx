import React, { Component, isValidElement } from 'react'

class ErrorBoundryComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            errorMessage:''
        };
    }

    // the static property in lifecycle of react app
    // that will be responsible forn listening the error occured
    // while executing the child component
    static getDerivedStateFromError(error){
        // pick and return the error, so that the componentDidCatch() will handle it and log it
        return {
            errorMessage:error.toString()
        }
    }



    // method that will be invoked when the child component is throwing an error
    // error: the actual error taht has been thrown by the child component
    // errLog: the error logger
    componentDidCatch=(error, errLog)=>{
        console.log(`Error Occured in the child component ${error.toString()}`, errLog.componentStack);
    }

    render() { 
        if(this.state.errorMessage){
            // if there is error then render the fallback UI for the comppnent
            return (  
                <div>
                    <h3>Some Error Occured while loading the component</h3>
                    <strong>
                      {
                          this.state.errorMessage
                      }
                    </strong>    
                </div>
            );
        }
        // otherwise keep rendering the child with all its further children 
        return this.props.children;
    }
}
 
 



class CounterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            counter:0
        };
        console.log('Counter Component Constructor Called');
    }

    increment=()=>{
        this.setState({counter: this.state.counter +1});
    }

    componentDidMount=()=>{
        console.log('Counter Component is mounteds');
    }

    componentDidUpdate=()=>{
        console.log('Counter Component is updated');
    }

    render() { 
       
           if(this.state.counter === 10){
               throw new Error('You have reached to max value');
           }  
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
 
 


class ContainerWithErrorBoundryComponent extends Component {
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
                <h2>The Container Component withn Error Boundry</h2>
                {/*  Using the Error Boundary for managing the lifecycle of the cgild component*/}
                <ErrorBoundryComponent>
                     <CounterComponent></CounterComponent>
                </ErrorBoundryComponent>
               
                <hr/>
                <OneMoreComponent></OneMoreComponent>
                <hr/>
                <input type="button" value="Reload"
                 onClick={this.reload.bind(this)}/>
            </div>

          );
    }
}
 
export default ContainerWithErrorBoundryComponent;
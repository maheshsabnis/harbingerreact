import React, { Component } from 'react'

class ReactPracticeComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {  
            value:null
        };
        // local public variable
        this.dataValue = null;
    }
    clickMe=()=>{
        this.setState({value:this.dataValue});
    }
    changeInput=(evt)=>{
        this.dataValue = evt.target.value;
    }

    // use the shouldComponentUpdate explicitely
    // shouldComponentUpdate=(nextProps,nextState)=>{
    //     // default implementation is 
    //     // return true;
    //     // please check the state changes from old to new value
    //     // if they are changed then return true else return false
    //     if(nextState.value === this.state.value) return false;
    //     return true;
    // }



    render() { 
        console.log('Render');
        return (  
            <div className="container">
                <h2>The Component for DEMO Prctices</h2>
                {this.state.value}
                <input type="text" onChange={this.changeInput.bind(this)}/>
                <hr />
                <input type="button" value="Click Me" onClick={this.clickMe.bind(this)}/>
                <hr />
                <ChildComponent></ChildComponent>
            </div>

        );
    }
}

class ChildComponent extends Component {
    render(){
        console.log('child');
        return(
            <div className="cotainer">
                <h3>The Child Component</h3>
            </div>
        );
    }
}
 
export default ReactPracticeComponent;
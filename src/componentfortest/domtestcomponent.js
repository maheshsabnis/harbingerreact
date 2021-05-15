import React from 'react';

const DOMTestComponent=(props)=>{
    if(props.message){
        return (
            <h1>Hello, {props.message}</h1>
        );
    } else {
        return (
            <h1>Hello, Mr. Unknown</h1>
        );
    }
};

export default DOMTestComponent;
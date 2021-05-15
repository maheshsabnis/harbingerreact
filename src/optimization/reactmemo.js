import React, {useState} from 'react';
 
function ChildComponent(props){
    console.log('Rendering');

    return(
        <div>
            {props.value}
        </div>
    );
}
// the React 17 for FUnctional components provides the 
// React.memo() out of the box
// the CHild Component's rendering will be cached till its state (or props)
// received from parent are not causing the component to be re-rendered

const MemoChild = React.memo(ChildComponent);

function CallerComppnent(){
    const [val, setState] = useState(0);
    let i = 0;
    const update=(v)=>{
        i = v;
        ++i;
        setState(i);
        alert(val);
    };
    return(
       <>
        <button 
        onClick={()=>update(0)}>Click</button>
        <hr />
        <MemoChild value={val}></MemoChild>
       </>
    );
}

export default CallerComppnent;
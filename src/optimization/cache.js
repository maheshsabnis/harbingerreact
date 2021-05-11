import React,{useState,useEffect} from 'react';
let counter = 0;
function My(props) {
   useEffect(()=>{
    console.log(`Received value ${props.data} ${counter}`);
   },[]);
   
    return (
        <div>
            {props.data}
            {counter++}
        </div>
    )
}
function CacheComponent() {
    const [state, setState] = useState(0)
    const change=()=>{
        setState(0);
        console.log(counter);
        counter++;
    }
    return (
        <>
            {/* <button onClick={()=> setState(0)}>Click</button> */}
            <button onClick={change}>Click</button>
            <My data={state} />
        </>
    )
}

export default CacheComponent;
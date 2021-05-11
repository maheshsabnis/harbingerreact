import React , {useState,useCallback} from 'react';
import { Fragment } from 'react';

// function ChildComponent(props){
//     console.log('Rendering Child');
//     return (
//         <div>
//             <h2>The Child Component</h2>
//             <button onClick={props.func}>Value in Child</button>
//         </div>
//     );
// }

function ChildComponent(props){
    console.log('Rendering Child');
    return (
        <div>
            <h2>The Child Component</h2>
            <button onClick={props.func}>Value in Child</button>
        </div>
    );
}

function ParentComponent(){
    // create a dependency paramtere that will be used to provide the information
    // of dependency check
    const deptMonitorValue = 10;
    const [counter, setCounter] = useState(0);
    // use Callback for memorize
    const clickHandler = useCallback(()=>{setCounter(deptMonitorValue)}, [deptMonitorValue]);
    // the clickHandler will not be re-created  in every re-rendering of the ParentCOmpponent  unless its depedency 'deptMonitorValue' changes

    return(
        <Fragment>
            <h1>The Parent Component</h1>
            <button onClick={()=>setCounter(counter +1)}>Update Counter</button>
            <hr />
            {/* Binding the funciton from the parent compoen to the child component using the props */}
            {/* <ChildComponent func={()=>setCounter(counter+1)}></ChildComponent> */}
            <ChildComponent func={clickHandler}></ChildComponent>
            <hr />
            <strong>
                {counter}
            </strong>
        </Fragment>
    );
}


export default ParentComponent;

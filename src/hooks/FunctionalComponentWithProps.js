import React from 'react'

// immutable object managed by react on UI thread
// for sharing datab across componentts
const FunctionalComponentWithProps=(props)=>{
    return (
        <div>
            <h2>The  Functional Component with props</h2>
           <div>
               <strong>
                   {props.msg}
               </strong>
           </div>
        </div>
    );
};

export default FunctionalComponentWithProps;

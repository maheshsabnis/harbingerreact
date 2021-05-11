import React, { memo } from 'react';
import {reverse,sort} from './math'; // sync earli loading
const UtilizerComponent=()=>{

    // Async loading of the the code splitted module
    import('./math').then(util=>{
        console.log(`Reverse =${reverse([3,4,5,6,2,3])}`);
        console.log(`Sort =  ${sort([3,4,5,6,2,3])}`);
    }).catch((err)=>{
        console.log(`Module not FOund`);
    });
    

    return (
        <div>
            Reverse = {reverse([3,4,5,6,2,3])}

            <hr />

            Sort =  {sort([3,4,5,6,2,3])}
        </div>
    );
};

export default UtilizerComponent;

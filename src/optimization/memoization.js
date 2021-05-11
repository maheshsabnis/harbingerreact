import React, { useState,useMemo } from 'react';
function AppChangeComponent() {
    const [count, setCount] = useState(0)
    

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
    // wait for 3 seconds
    const waitSync = (ms) => {
         setTimeout(()=>{
             console.log('waiting for completing some operations');
         },ms)
    }
    
    const expFunc = (count)=> {
        // waitSync(30000);
        sleep(3000).then(()=>{console.log('I am done')});
        return count * 90;
    }
    const resCount = expFunc(count)

    const resCountMemo = useMemo(()=> {
        return expFunc(count)
    }, [count])


    
    return (
        <>
            Count: {resCount}
            <hr />
            Memorized count {resCountMemo}
            <input type="text" onChange={(e)=> setCount(e.target.value)} placeholder="Set Count" />
        </>
    )
}

export default AppChangeComponent;
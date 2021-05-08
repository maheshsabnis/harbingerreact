import React, { Suspense } from 'react';

const LazyComponent = React.lazy(()=>import('./../hooks/StateCompponent'));

const LazyLoadHandlerComponent=()=>{

    return(
        <div className="container">
            <Suspense fallback={<div>loading......</div>}>
                <LazyComponent></LazyComponent>
            </Suspense>
        </div>
    );
};


export default LazyLoadHandlerComponent;
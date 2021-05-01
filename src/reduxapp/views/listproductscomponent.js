import React from 'react';

const ListProductsComponent=(props)=>{

    if(props.products === undefined || props.products.length === 0){
        return(
            <div>
                <strong>
                    No Records found
                </strong>
            </div>
        )
    }else {
        return (
           <div> {JSON.stringify(props.products)}</div>
        );
    }
};

export default ListProductsComponent;

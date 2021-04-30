import React, { useState,useEffect } from 'react'
// imported custom hook
import { useService } from "./customHookCode";

const CustomHookComponent=()=>{
    const data = useService("https://apiapptrainingnewapp.azurewebsites.net/api/Products");
    
    if(data === undefined){
        return(
            <div>
                <strong>No Data Received</strong>
            </div>
        );
    }
    return (
        <div>
            <h2>The Receibed Data</h2>
            <ul>
                {
                    data.map((d,i)=>(
                        <li key={i}>
                            {JSON.stringify(d)}
                        </li>
                    ))
                }
            </ul>
        </div> 
    );
};

export default CustomHookComponent;

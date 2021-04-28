import React, { useContext } from 'react';
import { DataContext } from "./dataContext";

const TableEventComponent=()=>{
    // subscribe to the Context

    const subscribedValue = useContext(DataContext);
    // receive the Array Source
    const dataSource = subscribedValue[Object.keys(subscribedValue)[0]]; 
    console.log(`Data Source ${JSON.stringify(dataSource)}`);


    // receive the callback funciton
    const callback =subscribedValue[Object.keys(subscribedValue)[1]];
    console.log(callback); 

    if(subscribedValue === undefined || subscribedValue.lenngth === 0) {
        return (
            <div>
                NO Records Received
            </div>
        );
    } else {
        
        return (
            <div>
                <h2>The Table Component</h2>
                <div>
                    <table>
                        <thead>
                            <tr>
                                {
                                    Object.keys( dataSource[0]).map((c,i)=>(
                                        <th key={i}>{c}</th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                              {/* Passing the selectec value back  */}
                            {
                                
                                dataSource.map((row,idx)=>(
                                  
                                    <tr key={idx} onClick={()=>callback(row)}>
                                        {
                                            Object.keys( dataSource[0]).map((c,i)=>(
                                                <td key={i}>{row[c]}</td>
                                            ))
                                        }
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

   
};

export default TableEventComponent;
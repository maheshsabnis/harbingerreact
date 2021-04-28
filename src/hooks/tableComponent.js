import React, { useContext } from 'react';
import { DataContext } from "./dataContext";

const TableComponent=()=>{
    // subscribe to the Context

    const subscribedValue = useContext(DataContext);
    console.log(`Received Values = ${JSON.stringify(subscribedValue)}`);

    if(subscribedValue === undefined || subscribedValue.lenngth === 0) {
        return (
            <div>
                NO Records Received
            </div>
        );
    } else {
        if(subscribedValue[0] === undefined){
            return (
                <div>
                    No
                </div>
            );
        }
        let columns = [];

        columns = Object.keys(subscribedValue[0]);
        return (
            <div>
                <h2>The Table Component</h2>
                <div>
                    <table>
                        <thead>
                            <tr>
                                {
                                    columns.map((c,i)=>(
                                        <th key={i}>{c}</th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                subscribedValue.map((row,idx)=>(
                                    <tr key={idx}>
                                        {
                                            columns.map((c,i)=>(
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

export default TableComponent;
import React from 'react';
import { Fragment } from 'react';
import { Bar  } from "react-chartjs-2";
import { DataProvider  } from "./../service/populationprovider";
const BarchartComponent=()=>{
    const provider = new DataProvider();
    const source = provider.getData();
    const dataSource = {
        labels:["React", "Vue.js", "Angular", "Ember"],
        datasets: [
            {
                label: 'Developers',
                backgroundColor: 'rgba(80,200,200,1)',
                borderColor: 'rgba(0,1,0,1)',
                borderWidth:4,
                data:[300,100,450,80]
            }
        ]
    };

    const populationDataSource = {
        labels:source.labels,
        datasets: [
            {
                label: 'Developers',
                backgroundColor: 'rgba(80,0,100,1)',
                borderColor: 'rgba(0,1,0,1)',
                borderWidth:4,
                data:source.data
            }
        ]
    };

    return(
        <div className="container">
            <table className="table table-bordered table-striped">
                <tbody>
                    <tr>
                        <td>
                            <h2>JavaScript Framework Developers</h2>
                             
                                <Bar
                                    data={dataSource}
                                    options={{
                                        title:{
                                            display:true,
                                            text: 'Average Developers available',
                                            fontSize:30
                                        },
                                        legend:{
                                            display:true,
                                            position:'right'
                                        }
                                    }}
                                ></Bar>
                           
                        </td>
                        </tr>
                        <tr>
                        <td>
                            <h2>Population Chart</h2>
                                
                                    <Bar
                                        data={populationDataSource}
                                        options={{
                                            title:{
                                                display:true,
                                                text: 'Average Developers available',
                                                fontSize:30
                                            },
                                            legend:{
                                                display:true,
                                                position:'top'
                                            }
                                        }}
                                    ></Bar>
                                
                        </td>
                    </tr>
                </tbody>
            </table>
           
            <hr />
           
        </div>

    );
};

export default BarchartComponent;
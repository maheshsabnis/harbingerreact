import React from 'react';
// import { DataProvider } from "./DataSource";
import { Bar,Line } from "react-chartjs-2";
 import { DataProvider  } from "./../service/populationprovider";

// BarChart, the 'data' property, this accepts the chart visualization values
// label: the data to be shown on X-Axis
// datasets: [
    // label: the chart title
    // backgroundColor: the color for chart Shape e.g. Bar
    // borderColor: the cordercoler for chart shape
    // borderwidth:
    // data: thhe dimension for Chart shape on Y-Axis 
//]

// options is the otyer object used for following
// {
    // title:{ display:<Boolead>, text:'<TEXT -Title -For -Chart>', fontSize:<TEXT-FONT-SIZE>},
    // legend:{displat: <Boolean>, position:'<right>, <top>' etc}
//}


const BarchartDemoComponent=()=>{
    const provider = new DataProvider();
    const dataSource = provider.getData();
    console.log(JSON.stringify(dataSource));
    const chartDataSource = {
        labels:dataSource.labels,
        datasets: [
            {
                label: 'Population',
                backgroundColor: 'rgba(80,0,190,1)',
                borderColor: 'rgba(0,1,0,1)',
                borderWidth: 3,
                data: dataSource.data
            }
        ]
    };

    const populationDataSource = {
        labels:dataSource.labels,
        datasets: [
            {
                label: 'Developers',
                backgroundColor: 'rgba(80,0,100,1)',
                borderColor: 'rgba(0,1,0,1)',
                borderWidth:4,
                data:dataSource.data
            }
        ]
    };


    const dataSource1 = {
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


    console.log(`Chart Source = ${dataSource.data}`);
    const options= {
         title :{display:true, text: 'The Stock data for Companies', fontSize:20},
         legend:{display:true, postion:'right'}
    };

    return(
        <div className="container">
            <table className="table table-bordered table-striped">
                <tbody>
                    <tr>
                        <td>
                            <Bar
                                data={chartDataSource}
                                options={{options}}
                            ></Bar> 
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default BarchartDemoComponent;
import React from 'react';
import { Line } from "react-chartjs-2";
const LineChartComponent=()=>{
    const dataSource = {
        labels:["React", "Vue.js", "Angular", "Ember","C#","JAVA","Python","GO"],
        datasets: [
            {
                label: 'Developers',
                backgroundColor: 'rgba(80,200,200,1)',
                borderColor: 'rgba(0,1,0,1)',
                borderWidth:4,
                data:[300,100,450,80,400,600,900,10]
            }
        ]
    };

    return (
        <div>
          <Line
            data={dataSource}
            options={{
              title:{
                display:true,
                text:'Average Developers',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
          />
        </div>
      );
};

export default LineChartComponent;
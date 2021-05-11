import React from 'react';
import { Pie,Doughnut } from "react-chartjs-2";
import './style.css';
const PieChartComponent=()=>{
    const state = {
        labels: ['January', 'February', 'March',
                 'April', 'May','June'],
        datasets: [
          {
            label: 'Rainfall',
            backgroundColor: [
              'green',
              'magenta',
              'yellow',
              'cyan',
              'red'
            ],
            hoverBackgroundColor: [
            '#501800',
            '#4B5000',
            '#175000',
            '#003350',
            '#35014F',
            '#35014F'
            ],
            data: [65, 59, 80, 81, 56,70]
          }
        ]
      };

      return (
        <div id="dvPie">
          <Pie
            data={state}
            options={{
              title:{
                display:true,
                text:'Average Rainfall per month',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
          />
  
          <Doughnut
            data={state}
            options={{
              title:{
                display:true,
                text:'Average Rainfall per month',
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

export default PieChartComponent;

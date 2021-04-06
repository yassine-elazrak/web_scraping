import React from 'react';
import {Line, Bar} from 'react-chartjs-2';

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}
const conf = {
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
            ,scales: {
              xAxes: [{
                  barThickness: 36,  // number (pixels) or 'flex'
                  maxBarThickness: 48 // number (pixels)
              }]
          }
          }
const Chart = (props) => {
  // console.log('hello')
  // const name = Bar
    return (
      <div>
        
        <Bar
          data={state}
          options={conf}
         
        />
      </div>
    );
  
}
export default Chart;
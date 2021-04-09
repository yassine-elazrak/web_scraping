import React from 'react';
import {Bar} from 'react-chartjs-2';
import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";
import "./test.css"

const Plot = createPlotlyComponent(Plotly);
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
export const Chart = (props) => {
  // console.log('hello')
  // const name = Bar
    return (
      <div className="test">
        
        {/* <Bar
          data={state}
          options={conf}
          layout={ { width:'45vw', font: {size: 18}, title: 'A Fancy Plot'} }
        /> */}
         <Plot 
        data={[{
          values: [19, 26, 55],
          labels: ['Residential', 'Non-Residential', 'Utility'],
          type: 'pie'
        }]}
        layout={ { width:'45 vw', font: {size: 18}, title: 'A Fancy Plot'} }
        // config={{responsive: true}}
      />
      </div>
    );
  
}






export const ChartPlotly = () => {
  return (
    <div>
        <Plot
        data={[{
          values: [19, 26, 55],
          labels: ['Residential', 'Non-Residential', 'Utility'],
          type: 'pie'
        }]}
        layout={ { width:'45vw', font: {size: 18}, title: 'A Fancy Plot'} }
        // config={{responsive: true}}
      />
    </div>
  )
}

// showlegend: false, width: 530,
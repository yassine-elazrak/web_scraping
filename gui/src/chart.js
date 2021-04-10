import React from 'react';
import {Bar,Line,Pie} from 'react-chartjs-2';
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

export const ChartBar = (props) => {
  // console.log('hello')
  // const name = Bar
    return (
      <div>
        
        <Bar
          data={state}
          options={conf}
          layout={ { width:'45vw', font: {size: 18}, title: 'A Fancy Plot'} }
        />
    
      </div>
    );
    
  }





  export const ChartLine = (props) => {
    // console.log('hello')
    // const name = Bar
      return (
        <div>
          
          <Line
            data={state}
            options={conf}
            layout={ { width:'45vw', font: {size: 18}, title: 'A Fancy Plot'} }
          />
      
        </div>
      );
      
    }
    const stateBie = {
      labels: ['January', 'February', 'March',
               'April', 'May'],
      datasets: [
        {
          label: 'Rainfall',
          backgroundColor: [
            '#B21F00',
            '#C9DE00',
            '#2FDE00',
            '#00A6B4',
            '#6800B4'
          ],
          hoverBackgroundColor: [
          '#501800',
          '#4B5000',
          '#175000',
          '#003350',
          '#35014F'
          ],
          data: [65, 59, 80, 81, 56]
        }
      ]
    }



    export const ChartBie = (props) => {
      // console.log('hello')
      // const name = Bar
        return (
          <div>
            
            <Pie
          data={stateBie}
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
        
      }
  // layout={ { width:'45 vw', font: {size: 18}, title: 'A Fancy Plot'} }
  
  
  
  
  
  {/* <Plot 
 data={[{
   values: [19, 26, 55],
   labels: ['Residential', 'Non-Residential', 'Utility'],
   type: 'pie'
 }]}
 layout={{
   width: "100px", height: "100px",
title: 'A Fancy Plot',
}}
// autosize: true
// useResizeHandler={{true}}
style={{width: "100px", height: "100px"}}
 
config={{responsive: true}} */}
  
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
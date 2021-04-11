import React from 'react';
import {Bar,Line,Pie} from 'react-chartjs-2';
// import Plotly from "plotly.js-basic-dist";
// import createPlotlyComponent from "react-plotly.js/factory";
// import "./test.css"

// const Plot = createPlotlyComponent(Plotly);
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
  

const state4 = {
  dataLine: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        fill: true,
        lineTension: 0.3,
        backgroundColor: "rgba(225, 204,230, .3)",
        borderColor: "rgb(205, 130, 158)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgb(205, 130,1 58)",
        pointBackgroundColor: "rgb(255, 255, 255)",
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(0, 0, 0)",
        pointHoverBorderColor: "rgba(220, 220, 220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: "My Second dataset",
        fill: true,
        lineTension: 0.3,
        backgroundColor: "rgba(184, 185, 210, .3)",
        borderColor: "rgb(35, 26, 136)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgb(35, 26, 136)",
        pointBackgroundColor: "rgb(255, 255, 255)",
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(0, 0, 0)",
        pointHoverBorderColor: "rgba(220, 220, 220, 1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [28, 48, 40, 19, 86, 27, 90]
      }
    ]
  }
};


export const Chart4= (props) => {
  // console.log('hello')
  // const name = Bar
    return (
      <div>
        
        <Line data={state4.dataLine} options={{ responsive: true }} />
    
      </div>
    );
    
  }
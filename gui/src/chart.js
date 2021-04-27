import axios from 'axios';
import React , {useState, useEffect} from 'react';
import {Bar,Line,Pie,Radar, Scatter} from 'react-chartjs-2';
// import { WordCloudController, WordElement } from 'chartjs-chart-wordcloud';
import ReactWordcloud from 'react-wordcloud';
import words from './data';



// import Plotly from "plotly.js-basic-dist";
// import createPlotlyComponent from "react-plotly.js/factory";
// import "./test.css"
// https://apexcharts.com/react-chart-demos/bar-charts/stacked/
// const Plot = createPlotlyComponent(Plotly);
const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: ['Rainfall','hello','dodo'],
      label: 'koko',
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
  const state = {
    labels: ['January', 'February', 'March',
             'April', 'May'],
    datasets: [
      {
        label: 'koko',
        backgroundColor:  [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 2,
        data: [65, 59, 80, 81, 56]
      }
    ]
  }
  var barChartData = {
    labels: [
      "Absence of OB",
      "Closeness",
      "Credibility",
      "Heritage",
      "M Disclosure",
      "11sass",
    ],
    datasets: [
      {
        label: "Mastercard",
        backgroundColor: "lightblue",
        borderColor: "blue",
        borderWidth: 1,
        data: [4, 7, 3, 6, 10,33]
      },

      {
        label: "Paypal",
        backgroundColor: "lightgreen",
        borderColor: "green",
        borderWidth: 1,
        data: [10,7,4,6,9,33]
      },
      {
        label: "Visa",
        backgroundColor: "yellow",
        borderColor: "orange",
        borderWidth: 1,
        data: [6,9,7,3,10,33]
      },
      {
        label: "Visa",
        backgroundColor: "yellow",
        borderColor: "orange",
        borderWidth: 1,
        data: [6,9,7,3,10,33]
      }
    ]
  };
  
  var chartOptions = {
    responsive: true,
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart"
    },
    scales: {
      xAxes: [{
        stacked: true,
        // barThickness: 1,  // number (pixels) or 'flex'
        // maxBarThickness: 18 // number (pixels)
    }],
      yAxes: [{
        stacked: true,
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
  ////
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



    //     const options = {
    //    scales: {
    //         xAxes: [{
    //             stacked: true
    //         }],
    //         yAxes: [{
    //             stacked: true
    //         }]
    //     }
    // }

    // let data ={ 
    //   datasets:[{
    //     label: 'test1',
    //       data :[1]
    //     },
    //     {
    //       label: 'test2',
    //       data:  [2]   
    //     }],
    //   labels:['label']
    // }
    
    return (
      <div>
        
        <Bar
          data={barChartData}
          options={chartOptions}
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
  

// const state4 = {
//   dataLine: {
//     labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September","October","November","December"],
//     datasets: [
//       {
//         label: "tweets negative",
//         fill: true,
//         lineTension: 0.3,
//         backgroundColor: "rgba(225, 204,230, .3)",
//         borderColor: "rgb(205, 130, 158)",
//         borderCapStyle: "butt",
//         borderDash: [],
//         borderDashOffset: 0.0,
//         borderJoinStyle: "miter",
//         pointBorderColor: "rgb(205, 130,1 58)",
//         pointBackgroundColor: "rgb(255, 255, 255)",
//         pointBorderWidth: 10,
//         pointHoverRadius: 5,
//         pointHoverBackgroundColor: "rgb(0, 0, 0)",
//         pointHoverBorderColor: "rgba(220, 220, 220,1)",
//         pointHoverBorderWidth: 2,
//         pointRadius: 1,
//         pointHitRadius: 10,
//         data: [65, 59, 80, 81, 56, 55, 40,23,45,67,22,37]
//       },
//       {
//         label: "tweets positive",
//         fill: true,
//         lineTension: 0.3,
//         backgroundColor: "rgba(14, 125, 210, .3)",
//         borderColor: "rgb(35, 26, 136)",
//         borderCapStyle: "butt",
//         borderDash: [],
//         borderDashOffset: 0.0,
//         borderJoinStyle: "miter",
//         pointBorderColor: "rgb(35, 26, 136)",
//         pointBackgroundColor: "rgb(255, 255, 255)",
//         pointBorderWidth: 10,
//         pointHoverRadius: 5,
//         pointHoverBackgroundColor: "rgb(0, 0, 0)",
//         pointHoverBorderColor: "rgba(20, 120, 20, 1)",
//         pointHoverBorderWidth: 2,
//         pointRadius: 1,
//         pointHitRadius: 10,
//         data: [28, 48, 40, 19, 86, 27, 90,33,22,67,84,23]
//       },
//       {
//         label: "tweets neutral",
//         fill: true,
//         lineTension: 0.3,
//         backgroundColor: "rgba(215, 24,280, .3)",
//         borderColor: "rgb(215, 130, 188)",
//         borderCapStyle: "butt",
//         borderDash: [],
//         borderDashOffset: 0.0,
//         borderJoinStyle: "miter",
//         pointBorderColor: "rgb(205, 130,1 58)",
//         pointBackgroundColor: "rgb(255, 255, 255)",
//         pointBorderWidth: 10,
//         pointHoverRadius: 5,
//         pointHoverBackgroundColor: "rgb(0, 0, 0)",
//         pointHoverBorderColor: "rgba(210, 210, 210,1)",
//         pointHoverBorderWidth: 2,
//         pointRadius: 1,
//         pointHitRadius: 10,
//         data: [95, 9, 10, 21, 76, 55, 30,33,2,25,77,44]
//       },
//     ]
//   }
// };


export const Monthsentiment= (props) => {
 
    const [state, setState] = useState({})

    useEffect(()=>{
      async function fetData(){

        const response = await axios({
          method: "GET",
          url:'/monthsentiment',
          headers:{'Content-type':'application/json'},

        })
        console.log("monthsentiment==>",response)
        const res= response.data.data;
        setState(  {
          labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September","October","November","December"],
          datasets: [
            {
              label: "tweets negative",
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
              data: res.positve
            },
            {
              label: "tweets positive",
              fill: true,
              lineTension: 0.3,
              backgroundColor: "rgba(14, 125, 210, .3)",
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
              pointHoverBorderColor: "rgba(20, 120, 20, 1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: res.negative
            },
            {
              label: "tweets neutral",
              fill: true,
              lineTension: 0.3,
              backgroundColor: "rgba(215, 24,280, .3)",
              borderColor: "rgb(215, 130, 188)",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgb(205, 130,1 58)",
              pointBackgroundColor: "rgb(255, 255, 255)",
              pointBorderWidth: 10,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgb(0, 0, 0)",
              pointHoverBorderColor: "rgba(210, 210, 210,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: res.neutral
            },
          ]
        })

      }
      fetData()

    },[]);
    return (
      <div>
        
        <Line data={state} options={{ responsive: true }} />
    
      </div>
    );
    
  }
  // https://chartjs-plugin-datalabels.netlify.app/samples/charts/radar.html
  // export const TopicSentiment = ()=>{
  //   const statelang = {
  //     dataRadar: {
  //       labels: ['Topic#1','Topic#2','Topic#3','Topic#4','Topic#5'],
  //       datasets: [
  //         {
  //           label: "tweets positive",
  //           backgroundColor: "rgba(194, 116, 161, 0.5)",
  //           borderColor: "rgb(194, 116, 161)",
  //           data: [65, 59, 90, 81, 56]
  //         },
  //         {
  //           label: "tweets negative",
  //           backgroundColor: "rgba(71, 225, 167, 0.5)",
  //           borderColor: "rgb(71, 225, 167)",
  //           data: [28, 48, 40, 19, 296]
  //         },
  //         {
  //           label: "tweets neural",
  //           backgroundColor: "rgba(11, 25, 167, 0.5)",
  //           borderColor: "rgb(11, 25, 197)",
  //           data: [28, 8, 4, 33, 266,]
  //         }
  //       ]
  //     }
  
  //   }

  //   return (
  //     <div>
  //       <Radar data={statelang.dataRadar} options={{ responsive: true }} />
  //     </div>
  //   )
  // }




export const Word = ({name, data})=>{
  const options = {
    colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
    enableTooltip: true,
    deterministic: false,
    fontFamily: "impact",
    fontSizes: [5, 60],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 1,
    rotations: 3,
    rotationAngles: [0, 90],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000,
    title:'hello'
  };
  // console.log('word_title', title)
 
  return (
    <div>
      <p style={{textAlign:'center', }}><h2>{name}</h2></p>
    <div>

    <ReactWordcloud words={data} options={options}  />
    </div>
    {/* <h1>hello</h1>*/}

    </div>
  )
}
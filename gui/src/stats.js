import axios from 'axios';
import React , {useState, useEffect} from 'react';
import {Bar,Line,Pie,Radar, Scatter} from 'react-chartjs-2';




export const BarLnagSentiment = ({sentiment, language})=>{


    // console.log('barlangsenti,rnt',sentiment , language)
    const state = {
      labels: [],
      datasets: [
        {
          label: 'positive',
          backgroundColor: "lightblue",
          borderColor: "blue",
          borderWidth: 1,
          data: []
        },
  
        {
          label: "negative",
          backgroundColor: "lightgreen",
          borderColor: "green",
          borderWidth: 1,
          data: []
        },
        {
          label: "neural",
          backgroundColor: "yellow",
          borderColor: "orange",
          borderWidth: 1,
          data: []
        },
       
      ]
    };
    const options = {
      responsive: true,
      legend: {
        position: "top"
      },
      title: {
        display: true,
        text: " Nb Tweets per Sentiment and Language"
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
    };
    const [data, setData] = useState(state);
    const {labels, positive, negative, neural} = data;
    useEffect(() => {
      console.log('config')
      async function fetData(){
        const response = await axios({
          methd:'get',
          url : '/barlangsentiment',
          headers:{'content-type':'application/json'},
        });
        init(response);
        console.log('success barls', response.data)
        

      };
      const init = (res)=>{
        // console.log('dubg', res.data)
        setData(
        {
          labels: res.data.keys,
          datasets: [
            {
              label: 'positive',
              backgroundColor: "lightblue",
              borderColor: "blue",
              borderWidth: 1,
              data: res.data.positive
            },
      
            {
              label: "negative",
              backgroundColor: "lightgreen",
              borderColor: "green",
              borderWidth: 1,
              data: res.data.negative
            },
            {
              label: "neural",
              backgroundColor: "yellow",
              borderColor: "orange",
              borderWidth: 1,
              data: res.data.neutral
            },
           
          ]
        }
        )
      }
      fetData();
      console.log('response', data);
     
    }, [])



    return(
      <div>
        <Bar
          data={data}
          options={options}
          layout={ { width:'45vw', font: {size: 18}, title: 'A Fancy Plot'} }

        />
        {/* {JSON.stringify(data)} */}
      </div>
    )
  }


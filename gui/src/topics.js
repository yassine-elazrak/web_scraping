import axios from 'axios';
import React , {useState, useEffect} from 'react';
import {Bar,Line,Pie,Radar, Scatter} from 'react-chartjs-2';
// import { WordCloudController, WordElement } from 'chartjs-chart-wordcloud';
import ReactWordcloud from 'react-wordcloud';


export const TopicSentiment = ()=>{
  // const statelang = {
  //   dataRadar: {
  //     labels: ['Topic#1','Topic#2','Topic#3','Topic#4','Topic#5'],
  //     datasets: [
  //       {
  //         label: "tweets positive",
  //         backgroundColor: "rgba(194, 116, 161, 0.5)",
  //         borderColor: "rgb(194, 116, 161)",
  //         data: [65, 59, 90, 81, 56]
  //       },
  //       {
  //         label: "tweets negative",
  //         backgroundColor: "rgba(71, 225, 167, 0.5)",
  //         borderColor: "rgb(71, 225, 167)",
  //         data: [28, 48, 40, 19, 296]
  //       },
  //       {
  //         label: "tweets neural",
  //         backgroundColor: "rgba(11, 25, 167, 0.5)",
  //         borderColor: "rgb(11, 25, 197)",
  //         data: [28, 8, 4, 33, 266,]
  //       }
  //     ]
  //   }

  // }
  const [data, setData] = useState({})

  useEffect(async ()=>{
    async function fetData(){
      const response = await axios({
        method:'get',
        url:'/sentimenttopic',
        headers:{'content-type':'application/json'}
      
      });
      const res = response.data.data

      setData({
        labels: ['Topic#1','Topic#2','Topic#3','Topic#4','Topic#5'],
        datasets: [
          {
            label: "tweets positive",
            backgroundColor: "rgba(194, 116, 161, 0.5)",
            borderColor: "rgb(194, 116, 161)",
            data: res.positve
          },
          {
            label: "tweets negative",
            backgroundColor: "rgba(71, 225, 167, 0.5)",
            borderColor: "rgb(71, 225, 167)",
            data: res.negative
          },
          {
            label: "tweets neutral",
            backgroundColor: "rgba(11, 25, 167, 0.5)",
            borderColor: "rgb(11, 25, 197)",
            data: res.neutral
          }
        ]
      });
      console.log('sentimenttopic',res)
    };
    fetData();

  },[])

  return (
    <div>
      <Radar data={data} options={{ responsive: true }} />
    </div>
  )
}

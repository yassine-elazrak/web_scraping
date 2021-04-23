import axios from "axios";
import React, { useState, useEffect } from "react";
import { Bar, Line, Pie, Radar, Scatter } from "react-chartjs-2";

export const Sentiment = () => {

  const options = {
    responsive: true,
    // legend: {
    //   position: "top",
    // },
    title: {
      display: true,
      text: " Nb Tweets per Sentiment ",
    },
    // scales: {
    //   xAxes: [
    //     {
    //       stacked: true,
    //       // barThickness: 1,  // number (pixels) or 'flex'
    //       // maxBarThickness: 18 // number (pixels)
    //     },
    //   ],
    //   yAxes: [
    //     {
    //       stacked: true,
    //       ticks: {
    //         beginAtZero: true,
    //       },
    //     },
    //   ],
    // },
  };
  const [data, setData] = useState({});
  useEffect(() => {
    console.log("config");
    async function fetData() {
      const response = await axios({
        methd: "get",
        url: "/sentiment",
        headers: { "content-type": "application/json" },
      });
      init(response);
      console.log("senti,em", response.data);
    }
    const init = (res) => {
      setData({
        labels: ["positive", "negative", "neutral"],
        datasets: [
          {
            
            backgroundColor: ["#B21F00", "#2FDE00", "#00A6B4"],
            hoverBackgroundColor: ["#501800", "#4B5000", "#175000"],
            data: res.data.sentiment,
          },
        ],
      });
    };
    fetData();
    // console.log("response", data);
  }, []);

  return (
    <div>
      <Pie
        data={data}
        options={options}
        layout={{ width: "45vw", font: { size: 18 }, }}
      />
    </div>
  );
};

// const stateBie = {
//   labels: ["January", "February", "March"],
//   datasets: [
//     {
//       label: "Rainfall",
//       backgroundColor: ["#B21F00", "#C9DE00", "#2FDE00", "#00A6B4", "#6800B4"],
//       hoverBackgroundColor: [
//         "#501800",
//         "#4B5000",
//         "#175000",
//         "#003350",
//         "#35014F",
//       ],
//       data: [65, 59, 80, 81, 56],
//     },
//   ],
// };


///=============================================================================================================================================
export const Language = (props) => {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetData() {
      const response = await axios({
          method:'get',
          url:'/language',
          headers : {'content-type':'application/json'},
      });
      console.log('lang', response.data)
      setData({
        dataBar: {
          labels: response.data.keys,
          datasets: [
            {
              label: "",
              data: response.data.values,
              backgroundColor: [
                "rgba(255, 134,159,0.4)",
                "rgba(98,  182, 239,0.4)",
                "rgba(255, 218, 128,0.4)",
                "rgba(113, 205, 205,0.4)",
                "rgba(170, 128, 252,0.4)",
                "rgba(255, 177, 101,0.4)",
              ],
              borderWidth: 2,
              borderColor: [
                "rgba(255, 134, 159, 1)",
                "rgba(98,  182, 239, 1)",
                "rgba(255, 218, 128, 1)",
                "rgba(113, 205, 205, 1)",
                "rgba(170, 128, 252, 1)",
                "rgba(255, 177, 101, 1)",
              ],
            },
          ],
        },
        barChartOptions: {
            responsive: true,
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: " Nb Tweets per  Language",
            },
          scales: {
            xAxes: [
              {
                barPercentage: 1,
                gridLines: {
                  display: true,
                  color: "rgba(0, 0, 0, 0.1)",
                },
              },
            ],
            yAxes: [
              {
                gridLines: {
                  display: true,
                  color: "rgba(0, 0, 0, 0.1)",
                },
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      });
    }
    fetData();
  }, []);
  return (
    <div>
      <Bar data={data.dataBar} options={data.barChartOptions} />
    </div>
  );
};

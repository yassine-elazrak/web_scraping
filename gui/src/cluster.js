import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Bar, Line, Pie, Radar, Scatter } from "react-chartjs-2";

const useStyles = makeStyles({
  topic: {
    margin: "15px 2px",
    backgroundColor: "#ffff",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    flexGrow: "1",
    borderRadius: "10px",
    justifyContent: "center",
  },
});

const color = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"]
const clusters = ['cluster1', 'cluster2','cluster3','cluster4','cluster5','cluster6']

export const Kmeans = () => {
  const options = {
    responsive: true,
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: " Nb Tweets per Sentiment and Language",
    },
    scales: {
      xAxes: [
        {
          stacked: true,
          // barThickness: 1,  // number (pixels) or 'flex'
          // maxBarThickness: 18 // number (pixels)
        },
      ],
      yAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  const state = {
    datasets: [
      {
        label: "Scatter Dataset",
        data: [
          {
            x: -10,
            y: 0,
          },
          {
            x: 0,
            y: 10,
          },
          {
            x: 10,
            y: 5,
          },
          {
            x: 0.5,
            y: 5.5,
          },
        ],
        backgroundColor: "rgb(255, 99, 132)",
      },
      {
        label: "Scatter Dataset1",
        data: [
          {
            x: -0.3,
            y: 2,
          },
          {
            x: 0,
            y: 1,
          },
          {
            x: 1,
            y: 5.4,
          },
          {
            x: 2.5,
            y: 5,
          },
        ],
        backgroundColor: "rgb(255, 229, 111)",
      },
    ],
  };

  const classes = useStyles();
  const [data, setData] = useState({});
  useEffect(() => {
    async function fetData() {
        const response = await axios({
          method:'get',
          url:'/kmeans',
          headers:{'content-type':'application/json'},
        });
        console.log('kmeans==>', response.data)
    }
    fetData({});
  }, []);
  return (
    <div className={classes.topic}>
      <Scatter
        data={state}
        options={options}
        layout={{ width: "100", font: { size: 18 }, title: "A Fancy Plot" }}
      />
    </div>
  );
};

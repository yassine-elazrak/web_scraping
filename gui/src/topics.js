import axios from 'axios';
import React , {useState, useEffect} from 'react';
import {Bar,Line,Pie,Radar, Scatter} from 'react-chartjs-2';
import {makeStyles} from '@material-ui/core/styles';
// import { WordCloudController, WordElement } from 'chartjs-chart-wordcloud';
import ReactWordcloud from 'react-wordcloud';
import {Word} from './chart';

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
        labels: res.labels,
        // ['Topic#1','Topic#2','Topic#3','Topic#4','Topic#5','Topic#6','Topic#6','Topic#7','Topic#8','Topic#9','Topic#10'],
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


export const Topicstext = () => {
  const [data, setData] = useState([]);
  const classes = useStyles()

  useEffect(() => {
      async function fetData(){
      const response = await axios({
        method:'GET',
        url:'/texttopic',
        headers:{
          'Content-Type':'application/json',
        }

        })
        const res = response.data.text;
        setData(res)
        // console.log('data topic text')
      }
      fetData()
  },[])
  return (
    <div className={classes.root}>
      
      {data.map((item)=>{
              return (<div className={classes.item}>
             {/* <Language /> */}
             {/* <ChartBar {...props}/> title='{positive.title}' words={positive.words}*/}
                <Word name={item.title} data={item.words}/>
              </div>)

          })}
      
      
    </div>
  )
}

const useStyles = makeStyles({

  root: {
    display: "grid",
    // width:'100%',
    gridTemplateColumns: "repeat(2,1fr)",
    gridAutoRows: "minmax(340px,auto)",
    gridAutoColumns: "minmax(340px,auto)",

    gap: "20px",
    // backgroundColor:"red",
    // display:'flex',
    // flexWrap:'wrap',
    // color: '#fff',
    // transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  },
  item: {
    display: "flex",
    backgroundColor: "#ffff",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: "10px",
    // padding:'1em',
  },
})



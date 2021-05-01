import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  ChartBar,
  ChartLine,
  ChartBie,
  Word,
  Monthsentiment,
  
} from "./chart";
import { Sentiment, Language } from "./tandences";
import { BarLnagSentiment,Statics } from "./stats";
// import { Topics } from "./topics";
import { Kmeans } from "./cluster";
import {TopicSentiment,Topicstext} from './topics';
import axios from "axios";
import { DialogTitle } from "@material-ui/core";
import Words from './data'


// import Tables from './table';

export default function Visualiton({namePath}) {
  const classes = useStyles();
  const [data , setData] = useState([]);
  console.log("name page ====>>",namePath,"<<=======")
  useEffect(() =>{
      async function fetData(){

          const response = await axios({
              method:'post',
              url:'/textsentiment',
              headers:{'content-type':'application/json'},
              data:{
                file:'tweet.csv',
                type:namePath,
              },

          })
          // console.log('getData==>', response.data.text[0].title)
          setData(response.data.text)
          // setData({sentiment:response.data.sentiment, language: response.data.language})

      }
      fetData()
  } ,[])
  // const positive = data[0]
  // const negative = data[1]
  // const neutral = data[2]

  // console.log("visualition==>",positive, negative , neutral, data)

  // const props = data
  // const name = "hello yassine"

  return (
    <div className={classes.container}>
      <div className={classes.statics}>
        <Statics/>
      </div>

      <div className={classes.root}>
        <div className={classes.item}>
          <Language />
          {/* <ChartBar {...props}/> */}
          {/* <Word/> */}
        </div>
        <div className={classes.item}>
          {/* <ChartPlotly/> */}
          {/* <ChartLine/>
           */}
          <Sentiment />
        </div>

        <div className={classes.item}>
          {/* <ChartBie/> */}
          <TopicSentiment />
        </div>
        <div className={classes.item}>
          {/* <Chart4/> */}
          {/* <Cluster/> */}
          <BarLnagSentiment />
        </div>

        <div className={classes.item}>
          {/* <ChartPlotly/> */}
          {/* <ChartLine/> */}
          {/* <Sentiment /> */}
          <Monthsentiment />
        </div>

        
       
          {data.map((item)=>{
              return (<div className={classes.item}>
             {/* <Language /> */}
             {/* <ChartBar {...props}/> title='{positive.title}' words={positive.words}*/}
                <Word name={item.title} data={item.words}/>
              </div>)

          })}
       

      </div>

      <div>
        {/* <Topics /> */}
        {/* <Tables/> */}
        {/* <Cluster/> */}
        <Kmeans />
      </div>
      {/* //+++++===================================================== */}
      {/* <div className={classes.root}> */}
        <Topicstext/>
      {/* </div> */}

     
    </div>
  );
}

const useStyles = makeStyles({
  statics:{
    // display:'flex',
    // flexDirection:'row',
    // flexWrap:'wrap',
    
    display: "grid",
    // width:'100%',
    gridTemplateColumns: "repeat(5,1fr)",
    gridAutoRows: "minmax(100px,auto)",
    gridAutoColumns: "minmax(100px,auto)",

    gap: "20px",


  },
  container: {
    backgroundColor: "#eceff0",
    padding: "18px",
  },

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
});

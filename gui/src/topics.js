import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Bubble} from 'react-chartjs-2';

const state = {
    dataBubble: {
      labels: 'Bubble',
      datasets: [
        {
          label: 'topic1 ',
          data: [
            {
              x: 4,
              y: 7,
              r: 40
            }
          ],
          backgroundColor: '#ff6384',
          hoverBackgroundColor: '#ff6384'
        },
        {
          label: 'topic2',
          data: [
            {
              x: 4.7,
              y: 7,
              r: 40
            }
          ],
          backgroundColor: '#44e4ee',
          hoverBackgroundColor: '#44e4ee'
        },
        {
          label: 'topic3',
          data: [
            {
              x: 6.4,
              y: 7,
              r: 40
            }
          ],
          backgroundColor: '#62088A',
          hoverBackgroundColor: '#62088A'
        }
      ]
    }
  };
  const options= {
    responsive: true,
    // title:{
    //     display:true,
    //     text:'Topic modling',
    //     fontSize:20
    //   },

    legend:{
            display:true,
            position: 'right'
          },
      title: {
        display: true,
        text: 'topic modling tweets',
        fontSize:20,
      }
  };

export const Topics = ()=>{


    const classes = useStyles();
    return(
        <div className={classes.topic}>
        <Bubble data={state.dataBubble} options={options} />


        </div>
    )
}

const useStyles = makeStyles({
    topic:{
        margin: '15px 2px',
        backgroundColor: '#ffff',
        display:'flex',
        flexDirection: 'row',
        flexWrap:'wrap',
        flexGrow: '1',
        borderRadius: '10px',
        justifyContent:'center',


    }

})
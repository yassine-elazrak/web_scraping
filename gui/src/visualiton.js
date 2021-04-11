import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import {ChartBar, ChartLine, ChartBie, Chart4} from './chart';
import {Topics} from './topics';
// import Tables from './table';

export default function Visualiton() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
                <div className={classes.root}>
                    <div className={classes.item}>
                        <ChartBar/>
                    </div>
                    <div className={classes.item}>
                    {/* <ChartPlotly/> */}
                    <ChartLine/>
                    </div>
                    <div className={classes.item}>
                        <ChartBie/>
                    </div>
                    <div className={classes.item}>
                    <Chart4/>
                    </div>
                    
                </div>

                <div>
                    <Topics/>
                    {/* <Tables/> */}
                </div>
        </div>
    )
}

const useStyles = makeStyles({
    container:{
        backgroundColor: '#eceff0',
        padding: '18px',

    },

    root: {
        display: 'grid',
        // width:'100%',
        gridTemplateColumns: 'repeat(2,1fr)',
        gridAutoRows:'minmax(340px,auto)',
        gridAutoColumns:'minmax(340px,auto)',
       
        gap:'20px',
        // backgroundColor:"red",
        // display:'flex',
        // flexWrap:'wrap',
        // color: '#fff',
        // transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    },
    item:{
        display:'flex',
        backgroundColor: '#ffff',
        flexDirection:'column',
        justifyContent:'center',
        borderRadius: '10px',
        // padding:'1em',



    },
    item2:{
        backgroundColor:'red',

    },
    item3:{
        backgroundColor: "#784",

    },
    item4:{
        backgroundColor:"yellow"

    }
});

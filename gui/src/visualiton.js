import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Chart from './chart';

export default function Visualiton() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.item}>
                <Chart/>
            </div>
            <div className={classes.item}>
                item2
            </div>
            <div className={classes.item}>
                Item3
            </div>
            <div className={classes.item}>
                item4
            </div>
            
        </div>
    )
}

const useStyles = makeStyles({

    root: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2,1fr)',
        gridAutoRows:'minmax(340px,auto)',
        padding: '11px',
        gap:'20px',
        // backgroundColor:"red",
        // display:'flex',
        // flexWrap:'wrap',
        // color: '#fff',
        // transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        backgroundColor: '#eceff0',
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

import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import {useForm} from 'react-hooks-helper';
import { Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import {useFrom} from 'react-hook-form';




export const Input = () => {
    return (
        <div>
            inputtt
        </div>
    )
}



const Clean = () => {
    
    const  classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.item}>
                item0
                <Input/>
            </div>
            <div className={classes.item}>
                item1

            </div>
            <div className={classes.item2}>
                item2

            </div>
            <div className={ classes.item3}>
                item3

            </div>
            <div >
            <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                startIcon={<SaveIcon />}
                                        >
                 Save
            </Button>
            </div>
           
            
        </div>
    )
}
const useStyles = makeStyles({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2,1fr)',
        gridAutoRows:'minmax(240px,auto)',
        padding: '11px',
        gap:'20px',


    },
    item:{
        backgroundColor:'#4343',
        borderRadius :'12px',

    },
    item2:{
        backgroundColor:'#4343',
        gridRow: '1 / 3',
        borderRadius :'12px',


    },
    item3:{
        backgroundColor:'#4343',
        gridColumn: '1 / 3',
        borderRadius :'12px',
        
    }
})

export default Clean;

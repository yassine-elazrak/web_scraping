import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
    width: 220,
    margin:'1em',
  },
}));

export default function DateAndTime({formData, setFormData}) {
  const classes = useStyles();
  const {startTime, endTime} = formData;
  const handleChange = (event)=>{
      setFormData({...formData,[event.target.name]:event.target.value})
        // console.log("-----",event.target.name, event.target.value)
      console.log("date22==>", formData , "____");
  }
  return (
      
    <form className={classes.container} noValidate>
      <TextField
        id="datetime-local"
        label="Next appointment"
        type="datetime-local"
        name='startTime'
        value={startTime}
        onChange={handleChange}       
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="datetime-local2"
        label="Next appointment"
        type="datetime-local"
        name='endTime'
        value={endTime}
        onChange={handleChange}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      

    </form>
  );
}

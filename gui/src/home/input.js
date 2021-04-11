import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { v4 } from 'uuid';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const Input =(props)=>{
  const classes = useStyles();
  const {tag, setTag} = props;

  const [item, setItem] = useState({id:v4(), title:''});

  const handleChange = (event)=>{
      console.log( 'debug',item);
      setItem({ id: item.id, title: event.target.value});
  }

  const handleAdd = ()=>{
      console.log('addd');
      if (item.title.trim())
      {
          setTag(prev=>{
              return [...prev, item ]
          })

          setItem({id:v4(), title:''});
      }

  }
  const handleDelete = ()=>{
    setItem({id:v4(), title:''});
      setTag([]);
  }

  console.log('hello yassine', tag);


  return (
    <Paper component="form" className={classes.root}>
      <IconButton className={classes.iconButton} >
      <Brightness6Icon/>
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Search "
        // inputProps={{ 'aria-label': 'search ' }}
        value={item.title}
        onChange={handleChange}
      />
      <IconButton  className={classes.iconButton} onClick={handleAdd} >
        <AddIcon/>
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton color="primary" className={classes.iconButton} onClick={handleDelete} >
         <DeleteIcon />
      </IconButton>
    </Paper>
  );
}

export default Input;
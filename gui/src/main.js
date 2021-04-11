import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "./home/input";
import Button from "@material-ui/core/Button";
import ClearIcon from '@material-ui/icons/Clear';
// import {v4} from 'uuid';

const Search = () => {
  const classes = useStyles();
  // const [text, setText] = useState({id: v4() , title: ''});
  const [tag, setTag] = useState([]);

  // const handleChange = (event)=>{
  //   setText((prev)=>{
  //     return {id: prev.id , title: event.target.value}
  //   })
  // };

  // const handleAdd = ()=>{
  //   if (text.trim())
  //   {
  //     setTag(prev=>{
  //       return [...prev, text]
  //     })
  //     setText({id: v4(), title:''});
  //   }
  // };

  const handleDelete = (id)=>{
    setTag(prev=>{
      return prev.filter(item => item.id !== id)
    })

  };

  const props = { tag, setTag };
  return (
    <div className={classes.container}>
      <div className={classes.items}>
        <div className={classes.container_list}>
          {tag.map((item) => {
            return (
                
               <Button variant='contained' 
               onClick={()=>{handleDelete(item.id)}}
               size='small' endIcon={ <ClearIcon/> } color='primary' className={classes.but_item}  key={item.id}> {item.title}  </Button>
            );
          })}
        </div>
        <div>
          <Input {...props} />
        </div>
        {/* <div className={classes.Auto}>
        hello

        </div> */}
      </div>
    </div>
  );
};

const useStyles = makeStyles({
  container: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",

    backgroundColor: "#FFF",
    alignItems: "center",
    // alignItems:'flex-end',
  },
  items: {
    backgroundColor: "#4263",
    height: "500",
    width: "500",
    borderRadius: "20px",
    alignItems: "center",
  },
  container_list: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "start-end",
    maxWidth:'400px',
  },
  but_item:{
    margin:' 1px 4px',
  },
  Auto:{
    backgroundColor:'#858'

  }
});

export default Search;

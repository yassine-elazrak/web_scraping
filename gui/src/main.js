import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "./home/input";
import Button from "@material-ui/core/Button";
import ClearIcon from '@material-ui/icons/Clear';
import DeleteIcon from '@material-ui/icons/Delete'
import SearchIcon from '@material-ui/icons/Search';
// import {v4} from 'uuid';

const Search2 = () => {
  const classes = useStyles();
  const [tag, setTag] = useState([]);



  const handleDelete = (id)=>{
    setTag(prev=>{
      return prev.filter(item => item.id !== id)
    })

  };
//   const delete_element = (id) => {
//     setNewItem((prev) => {
//         return prev.filter(item => item.id !== id);
//     })
    
// }
// const handleSearch = () => {
   
//     var lst = []
//     newItem.map(item => lst.push(item.itemName))
//     if (lst.length ==0)
//         return
//     axios({
//         method:'post',
//         url:'/search',
//     headers:{'content-type':'application/json'},
//         data : lst,


//     })
//     .then(response => console.log(response))
//     .catch(error=>console.log(error))

// };


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
         {/* <br />
            <div className={classes.butt}>
                <Button type='button' onClick={() => {}}>
                    <DeleteIcon /> Delete All
                </Button>
                <Button >
                    <SearchIcon /> Search
                </Button>
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
    borderRadius: "8px",
    alignItems: "center",
  },
  container_list: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "start-end",
    maxWidth:'400px',
    // padding:'4px',
  },
  but_item:{
    margin:' 3px 3px',
  },
  Auto:{
    backgroundColor:'#858'

  }
});

export default Search2;

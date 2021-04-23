import React, { useState } from 'react';
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { v4 } from 'uuid';
// import './BarSearch.css'
const BarSearch = () => {
    const [item, setItem] = useState({ id: v4(), itemName: '' })
    // const [counter, setCounter] = useState(0)
    const [newItem, setNewItem] = useState([])
    const change_input = (event) => {
        setItem((prev) => { return { id: prev.id, itemName: event.target.value } });
    }
    const Add_Element = () => {
        if (item.itemName.trim()) {
            setNewItem((prev) => {
                // setCounter(counter + 1)
                return [...prev, item];
            });
            setItem({ id: v4(), itemName: '' })
        }
    }
    const delete_element = (id) => {
        setNewItem((prev) => {
            return prev.filter(item => item.id !== id);
        })
        
    }
    const handleSearch = () => {
       
        var lst = []
        newItem.map(item => lst.push(item.itemName))
        if (lst.length ==0)
            return
        axios({
            method:'post',
            url:'/search',
        headers:{'content-type':'application/json'},
            data : lst,


        })
        .then(response => console.log(response))
        .catch(error=>console.log(error))

    }
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>
                <input type="text" className={classes.input} value={item.itemName} placeholder="Search...  " onChange={change_input} />
                <Button onClick={Add_Element} className={classes.add}>
                    <AddIcon />
                </Button>
                <br />
                <br />
                <ul>
                    {
                        newItem.map((val) => {
                            return <><li style={{ listStyle: "none" }} key={val.id}>
                                {val.itemName}
                                <Button className={classes.del} type="button" onClick={() => delete_element(val.id)}>
                                    <DeleteIcon />
                                </Button>
                            </li>
                                <hr /></>
                        })
                    }
                </ul>
            </div>
            <br />
            <div className={classes.butt}>
                <Button type='button' onClick={() => setNewItem([])}>
                    <DeleteIcon /> Delete All
                </Button>
                <Button onClick={handleSearch}>
                    <SearchIcon /> Search
                </Button>
            </div>
        </div>
    )
}
export default BarSearch;
const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        width: '50%',
        left: '25%',
        top: '30%',
        padding: '33px',
        borderRadius: '22px',
        margin: 'auto',
        backgroundColor: '#F4F4F4',
    },
    del: {
        float: 'right !important',
    },
    input: {
        marginLeft: '2% !important',
        position: 'relative',
        padding: '10px',
        minWidth: '80%',
        height: '23px',
        outline: 'none',
        boxShadow: '5px 5px 15px -5px rgba(0,0,0,0.3)',
        borderRadius: '15px',
        /* border-bottom : 3px solid #8566AA; */
    },
    add: {
        width: '25px',
        height: '43px',
        backgroundColor: '#7E57C2!important',
        marginLeft: '8px !important',
    },
    butt: {
        position: 'relative',
        paddingLeft: '20%',
        paddingBottom: '0px !important',
    }
}));
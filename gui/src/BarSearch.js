import React, {useState} from 'react';
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'
import SearchIcon from '@material-ui/icons/Search';
import './BarSearch.css'

const BarSearch = () => {
    const [item , setItem] = useState({id: null, itemName: ''})
    const [counter, setCounter] = useState(0)
    const [newItem, setNewItem] = useState([])
    const change_input = (event) => {
        

        setItem({id: counter, itemName: event.target.value});
    } 
    const Add_Element = () =>{
        if (item.itemName.trim())
        {
            setNewItem((prev) =>{
                setCounter(counter + 1)
                return [...prev, item];
            });
            setItem({id: null, itemName: ''})
        }
    }
    const delete_element = (id)=>{
        setNewItem((prev)=>{
            return prev.filter(item => item.id !== id);
        })
    }

    
    return (
        <div className='root'>
            <div>
                <input type="text"   value={item.itemName} placeholder="Search...  "  onChange = {change_input} />
                <Button onClick={Add_Element} className='add'>
                   <AddIcon/>
                </Button>
                <br/>
                <ul>
                    {
                        newItem.map((val)=>{
                            return <><li style={{listStyle: "none"}} key={val.id}>
                                        {val.itemName} 
                                        <Button className='del'  type= "button" onClick={ ()=> delete_element(val.id) }>
                                                <DeleteIcon/>
                                        </Button> 
                                    </li>
                                    <hr/></>
                        })
                    }
                </ul>
            </div>
            <br/>
            <div className='butt'>
                <Button type='button' onClick={()=> setNewItem([])}>
                    <DeleteIcon/> Delete All
                </Button>
                <Button>
                    <SearchIcon/> Search
                </Button>
            </div>
        </div>
    )
}


export default BarSearch;
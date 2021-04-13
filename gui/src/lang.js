import React ,{useState} from 'react'
import {makeStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';



export const Lang = ({formData , setFormData}) => {

    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);

    const handleChange = (event)=>{
        setFormData({...formData,[event.target.name] : event.target.value})
    };
    
    const handleOpen = ()=> {
        setOpen(true)
    };

    const handleClose = ()=>{
        setOpen(false)
    };

    const handleOpen2 = ()=> {
        setOpen2(true)
    };

    const handleClose2 = ()=>{
        setOpen2(false)
    };
    const {language, emoji}  = formData;
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.items}>
                <p>choise lang</p>
            </div>
             <div className={classes.items}>
                <Select 
                open={open}
                value={language}
                name='language'
                onClose={handleClose}
                onOpen={handleOpen}
                onChange={handleChange}

                >
                    <MenuItem value={'franch'}>
                    <em>france</em>
                    </MenuItem >
                    <MenuItem value={'arabic'}>
                    <em>arabic</em>
                    </MenuItem>
                    <MenuItem value={'english'}>
                        <em>english</em>
                    </MenuItem>
                </Select>  
            </div>
            <div className={classes.items}>
                <p>choise eta emoji</p>
            </div>
             <div className={classes.items}>
                <Select 
                open={open2}
                value={emoji}
                name='emoji'
                onClose={handleClose2}
                onOpen={handleOpen2}
                onChange={handleChange}

                >
                    <MenuItem value={'stay'}>
                    <em>stay emoji</em>
                    </MenuItem >
                    <MenuItem value={'replace'}>
                    <em>replace emoji</em>
                    </MenuItem>
                    <MenuItem value={'remove'}>
                        <em>remove emoji</em>
                    </MenuItem>
                </Select>  
            </div>   
        </div>
    )
}
const useStyles = makeStyles({
    root: {
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        padding:'1erm',
        // width:'50%',
        justifyContent:'flex-start',

    },
    items:{
        margin:'23px',

    },
});


export const Limet = (props) => {
    const classes = useStyles();
    const [size, setSize] = useState("inf");
    
    return (
        <div className={classes.limet}>
                Limet
        </div>
    )
}




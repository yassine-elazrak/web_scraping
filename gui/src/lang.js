import React ,{useState} from 'react'
import {makeStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';



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
                <p>Choose your language</p>
           
                <Select 
                open={open}
                value={language}
                name='language'
                onClose={handleClose}
                onOpen={handleOpen}
                onChange={handleChange}

                >
                    <MenuItem value={'fr'}>
                    <em>fr</em>
                    </MenuItem >
                    <MenuItem value={'ar'}>
                    <em>ar</em>
                    </MenuItem>
                    <MenuItem value={'en'}>
                        <em>en</em>
                    </MenuItem>
                </Select>  
            </div>
            <div className={classes.items}>
                <p>Choose your status for the emoji</p>
            
                <Select 
                open={open2}
                value={emoji}
                name='emoji'
                onClose={handleClose2}
                onOpen={handleOpen2}
                onChange={handleChange}

                >
                    <MenuItem value={'stay'}>
                    <em>Keep the emoji in Tweets</em>
                    </MenuItem >
                    <MenuItem value={'replace'}>
                    <em>Replace emojis in Tweets</em>
                    </MenuItem>
                    <MenuItem value={'remove'}>
                        <em>Remove emojis in Tweets</em>
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
        display:'flex',
        flexDirection:'column',
        flexWrap:'wrap',

    },
});


export const Limet = ({formData, setFormData}) => {
    const classes = useStyles();
    // const [size, setSize] = useState('');
    // const [file, setFile] = useState('');
    const [flag, setFlag] = useState(false);

    // const handleChangeFile = (event)=>{
    //     setFile(event.target.value)
    // }
    // const handleChangeSize = (event)=>{
    //     setSize(event.target.value)
    // }
    const {size, file} = formData;
    const handleChange = (event)=>{
        setFormData({...formData, [event.target.name]:event.target.value})
    }

    // console.log('data==>', formData)

    return (
        <div className={classes.limet}>
            <TextField
            autoFocus
            margin="dense"
            // id="name"
            label="Name File"
            type="email"
             placeholder='enter name file'value={file} name='file' onChange={handleChange}/>
             <br></br>    
            <div>  <p>Determine the number of tweets </p> <Switch label="Determine the number of tweets" name="tweets"  checked={flag} onChange={()=>{setFlag(!flag)}}/> </div>
            {flag && <div>  <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Number Tweets"
            type="email"
            // fullWidth
           name='size' placeholder='enter size tweet' type="text" maxlength="9" 
  required placeholder="Enter Digits only" pattern = "[0-9]" value={size} onChange={handleChange}/> 
  </div>}
        </div>
    )
}




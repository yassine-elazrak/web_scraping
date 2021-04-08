import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';

const Clean = ({formData, setFormData}) => {
    const classes = useStyles();
    const {settings} = formData;
    const [state, setState] = useState(settings);

    const handleChange = (event) =>{
        setState({...state, [event.target.name]: event.target.checked});
    }
    const steps = ['digit', 'punctuation', 'ulrs', 'lowercase', 'diacritics',
    'whitespace', 'fillna' , 'stemming', 'Name'];
    
    const addChange = (data)=>{
        console.log('Add',data);

        setFormData((prevFormData)=> ({...prevFormData, settings:data})
        )};

    useEffect(()=>{
        addChange(state);
    },[state])
    
    return (
        <div className={classes.root}>
            {
                steps.map((data) =>{
                    return <div className={classes.item}> <Checkbox checked={state[[data]]} name={data} onChange={handleChange}/> <p>remove {data}</p></div>
                })
            }
            
        </div>
    )
}
const useStyles = makeStyles({

    root:{
        display:'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gridAutoRows:'minmax(22px,auto)',
        gap: '1rem',
        backgroundColor:'#9963',
        width: '600px',
        padding:'11px',
        borderRadius:'12px',

    },
    item:{
        backgroundColor:'white',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',

    },
});

export default Clean;

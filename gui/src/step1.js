import React , {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/step';
import StepContent from '@material-ui/core/StepContent';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import Paper from '@material-ui/core/Paper';
import DateAndTime from './date'; 
import Clean from './clean';
import Lang from './lang';
import SaveIcon from '@material-ui/icons/Save';
import ReplayIcon from '@material-ui/icons/Replay';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';


const defaultSettings = {
    digit:false,
    punctuation: false,
    ulrs:false,
    lowercase: false,
    diacritics: false,
    whitespace:false,
    fillna:false,
    stemming: false,
    Name: false,    
}
const dataDefault = {
    startTime:'2020-05-24T10:30',
    endTime:'2019-05-24T10:30',
    language:'english',
    emoji:'replace',
    settings:defaultSettings,
}

const getStep = ()=>{
    return ['settings date', 'settings clean data' , 'settings language and emoji'];
};

const Step1 = () => {
    const classes = useStyles();
    const [formData, setFormData] = useState(dataDefault);
    const [activeId, setActiveId] = useState(0);
    const handleNext = () =>{
        setActiveId(prevActiveId => prevActiveId + 1 );
    };
    const steps = getStep();
    
    const handleBack = ()=>{
        setActiveId( prevActiveId => prevActiveId - 1);
    };
    const handleReset = () => {
        console.log('Reset',formData, "Reset222close");
        // setFormData(dataDefault);
        setActiveId(0);
    };
    const handleSave = ()=>{
        alert(formData);
        console.log(formData);
    }
    const props = {formData, setFormData};
    // console.log("formDatat==>",formData)
    const getContent = (id)=>{
        switch (id) {
            case 0:
                return <div> <DateAndTime {...props}/></div>;
            case 1:
                return <div><Clean {...props} /></div>;
            case 2:
                return <div> <Lang {...props} /> </div>;
            default:
                return 'unknow id';
        }
    }
    return (
        <div className={classes.root}>
            <Stepper  activeStep={activeId} orientation='vertical'>
                {
                    steps.map((label, index) => {
                      
                      return <Step key={label}>
                           <StepLabel>
                               <h2>{label}</h2>
                           </StepLabel>
                           <StepContent>
                               <Typography>
                                   {getContent(index)}
                               </Typography>
                               <div>
                                   <Button 
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    disabled={activeId===0}
                                    onClick={handleBack}
                                       
                                    startIcon={ <SkipPreviousIcon/>}
                                    className={classes.button}
                                   >
                                       Back
                                   </Button>
                                   <Button 

                                    variant="contained"
                                     color="primary"
                                     size="small"
                                    onClick={handleNext}
                                    endIcon={(activeId !== steps.length -1 ) && <SkipNextIcon/>}
                                    className={classes.button}
                                   >
                                       {activeId === steps.length -1 ? 'Finish' : 'Next'}
                                   </Button>
                               </div>
                           </StepContent>
                          
                       </Step>
                            
                    })
                    
                }
                {/* <h1>hello</h1> */}
            </Stepper>
            {
                               activeId === steps.length &&(
                                   <div  className={classes.restContainer}>
                                       <Typography>
                                           All steps completed - you&apos;re finished
                                       </Typography>
                                       <div>
                                       <Button 
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                       onClick={handleReset}
                                       startIcon={<ReplayIcon />}
                                       className={classes.button}>
                                           Reset
                                       </Button> 
                                       <Button 
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                        startIcon={<SaveIcon />}
                                        onClick={handleSave}
                                        className={classes.button}>
                                           Save
                                       </Button>
                                       </div>

                                   </div>
                               )
                           }


        </div>

    )
}
const useStyles = makeStyles({
    root:{
        width: '100%',
    },

    actionContainer:{
        marginBottom: '2rem',
    },
    button:{
        marginTop: '1rem',
        marginRight: '1rem',
    },
    restContainer:{
        width:'60%',
        padding: '2rem',

    }

});

export default Step1;


// const Print = () => {
//     return (
//         <div>
            
//         </div>
//     )
// }

         
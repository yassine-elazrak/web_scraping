import React , {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/step';


const getStep = ()=>{
    return ['11', '21' , '31'];
};

const getContent = (id)=>{
    switch (id) {
        case 1:
            return 'hello 111';
        case 2:
            return 'hello 222';
        case 3:
            return "hello 333";
        default:
            return 'unknow id';
    }
}
const Step1 = () => {
    const classes = useStyles();
    const [activeId, setActiveId] = useState(0);
    const handleNext = () =>{
        setActiveId(prevActiveId => prevActiveId + 1 );
    };
    const steps = getStep();

    const handleBack = ()=>{
        setActiveId( prevActiveId => prevActiveId - 1);
    };
    const handleReset = () => {
        setActiveId(0);
    };
    return (
        <div className={classes.root}>
            <Stepper key="1" activeStep={activeId} orientation='vertical'>
                {
                    steps.map((label, index) => {
                        return <h1 key={label} >
                            {steps}
                        </h1>
                    })
                    
                }
            </Stepper>

        </div>

    )
}
const useStyles = makeStyles({
    root:{

    }
})

export default Step1

            
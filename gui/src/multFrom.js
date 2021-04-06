import React from 'react'
import { useForm, useStep } from 'react-hooks-helper';
import {Step1} from './step1';
import {Step2} from './step2';

const defaultdata = {
    firstName: '',
    lastName: '',
    phone: '',
};

const steps = [
    {id:'1'},
    {id:'2'},
    {id:'3'},
];

export  const MultFrom = () => {
    const [formdata, setForm] = useForm(defaultdata);
    const {step, navigation} = useStep({
        steps,
        initialSteps:0,
    });
    const props = {formdata, setForm, navigation};

    switch(step.id)
    {
        case '1':
            return <Step1 {...props}/>;
        case '2':
            return <Step2 {...props}/>;
        
    }

    return (
        <div>
            <h1>Multi step form</h1>
        </div>
    )
}

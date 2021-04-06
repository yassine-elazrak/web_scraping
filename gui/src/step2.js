import React from 'react'
import Button from '@material-ui/core/Button';

export const Step2 = ({formdata, setForm,navigation }) => {

    const {lastName} = formdata;
    console.log(navigation)
    return (
        <div>
            <h1>lastname</h1>
            <br/>
            <input value={lastName} name='lastName' placeholder='enter lastname' onChange={setForm}/>
            <br/>
            <Button  color='primary' onClick={()=> navigation.next()}>
                next
            </Button>
            <Button  color='primary' onClick={()=> navigation.previous()}>
                back
            </Button>
        </div>
    )
}
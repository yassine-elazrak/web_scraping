import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';

const Meun = () => {
    const classes = useStyles()
    const handledash =async () => {
        const res = await axios({
            method: 'post',
            url: '/meun',
            headers: { 'Content-Type': 'application/json' },
            data: {file:'tweet.csv'}
        })
        window.location.reload(false)

    }
    const handlefile = async() => {
        handleClose()
        const res = await axios({
            method: 'post',
            url: '/meun',
            headers: { 'Content-Type': 'application/json' },
            data: {file:state},
        })
        window.location.reload(false)



    }
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const [state, setState] = useState('')
    const handleChange = (event) => {
        setState(event.target.value)

    }

    return (
        <div className={classes.root}>
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                <Button onClick={handleClickOpen}><span>import file</span></Button>
                <Button onClick={handledash}> <span>dashboard</span></Button>
                {/* <Button>Three</Button> */}
            </ButtonGroup>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Import File Visualiton</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {/* To subscribe to this website, please enter your email address here. We will send updates
                        occasionally. */}
                        please enter your name file

          </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Enter Name File"
                        type="text"
                        fullWidth
                        value={state}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handlefile} color="primary">
                        Save
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

const useStyles = makeStyles({
    root: {
        // backgroundColor:'#f536',

    },

})

export default Meun;

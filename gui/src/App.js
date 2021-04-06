import React  from 'react';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
root:{

}
});
const  App = ()=>{
	const classes = useStyles();
	return(
		<div className={classes.root}>
			<p>hello yassine   home</p>
		</div>
	)
}


export default App;
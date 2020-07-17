import React, {useState} from 'react'
import { TextField, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch',
    },
  },
}));

function CountactUs() {
	const [values, setValues] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
	})
	const [isSubmit, setIsSubmit] = useState(false)
	const classes = useStyles();

	 const handleSubmit = e =>{
	 	//e.preventDefault();
	 	console.log("sent")
	 	}
	return(
		<div className = "container">
			<div className = "outerFormContainer"> 
				<img id = "emailIcon"src = "./emailIcon.png"/>	
				<div className = "innerFormContainer">
					<h2> Get in touch </h2>
					<form className = {classes.root} onSubmit = {handleSubmit}>	
				      <TextField label="Name"  placeholder="Jane Doe" type ="text" variant = "outlined" onChange = { e => setValues({...values, name: e.target.value})}/>
				      <TextField label="Email"  placeholder="janedoe@gmail.com"  type ="email"  variant = "outlined" />
				      <TextField label="Subject"  placeholder="Help with billing"  type ="text" variant = "outlined" />
				      <TextField label="Message"  placeholder="Joe Doe"  type ="text"  variant = "outlined" multiline rowsMax = "3"/>
				      <Button variant="contained" color="primary" type="submit" onClick = {e => setIsSubmit({isSubmit: !isSubmit})} >  Submit </Button>
	    		   </form>
    			</div>
			</div>
		</div>
		)	
}
export default CountactUs
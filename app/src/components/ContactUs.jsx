import React, {useState, useEffect, useRef} from 'react'
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
	const classes = useStyles();
	const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

	const [values, setValues] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
	})
	const [errors, setErrorMessage] = useState({
		nameError: '',
		emailError: '',
		subjectError:'',
		messageError: ''
	})
	const [isSubmit, setIsSubmit] = useState(false)
	const firstRender = useRef(true)

	 const formValidation =() =>{
		if(values.name === ""){
			setErrorMessage({...errors, nameError: "name field is empty"})
			console.log("emptyname")
		}
		 if(!String(values.email).match(emailFormat)){
		 	setErrorMessage({...errors, emailError: "email field is invalid"})
			console.log("bad email")
		 }
		 if(values.subject == ""){
		 	setErrorMessage({...errors, subjectError: "subject field is empty"})
		 	console.log("empty sub")
		}
		 if(values.message == ""){
		 	setErrorMessage({...errors, messageError: "message field is empty"})
			console.log("empty message")	
		 }
}

		const handleSubmit = e =>{
		 	formValidation()
	 }							

			useEffect(() =>{
				if(firstRender.current){
				firstRender.current = false;
				return
			 }
			handleSubmit()
		},[handleSubmit])

	return(
		<div className = "container">
			<div className = "outerFormContainer"> 
				<img id = "emailIcon"src = "./emailIcon.png"/>	
				<div className = "innerFormContainer">
					<h2> Get in touch </h2>
					<form className = {classes.root} onSubmit = {handleSubmit}>	
				      <TextField label="Name"  placeholder="Jane Doe" type ="text" variant = "outlined" onChange = { e => setValues({...values, name: e.target.value})}/>
				      <TextField label="Email"  placeholder="janedoe@gmail.com"  type ="email"  variant = "outlined"  onChange = { e => setValues({...values, email: e.target.value})}/>
				      <TextField label="Subject"  placeholder="Help with billing"  type ="text" variant = "outlined"  onChange = { e => setValues({...values, subject: e.target.value})}/>
				      <TextField label="Message"  placeholder="Joe Doe"  type ="text"  variant = "outlined" multiline rowsMax = "3" onChange = { e => setValues({...values, message: e.target.value})}/>
				      <Button variant="contained" color="primary" type="submit" onClick = {e => setIsSubmit({isSubmit: !isSubmit})} >  Submit </Button>
	    		   </form>
    			</div>
			</div>
		</div>
		)	
}
export default CountactUs
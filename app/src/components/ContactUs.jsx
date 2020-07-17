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
	
	const [name, setName] = "Jenny";
	const [email, setEmail] = "";
	const [showErrors, setShowErrors] = useState(false);
	
	const errors: Array<string> = [];

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

	 const formValidation = () =>{
		 errors = [];	
		 
		 const isNameValid = (name !== "")
		 const isEmailValid = (email !== "") 
		 
		 if (!isNameValid) {
			errors.push("Name is not valid, please try again."); 
		 }
		 
		
	}							

		useEffect(() =>{
			if (errors.length > 0) { setShowErrors(true) }
			else setShowErrors(false)
		},[errors])

	return(
		<div className = "container">
			<div className = "outerFormContainer"> 
				<img id = "emailIcon"src = "./emailIcon.png"/>	
				<div className = "innerFormContainer">
					<h2> Get in touch </h2>
					{showErrors && (<p>{errors}</p>)}
					<form className = {classes.root} onSubmit = {handleSubmit}>	
				      <TextField label="Name"  placeholder="Jane Doe" type ="text" variant = "outlined" value={name} onChange = {setName}/>
				      <TextField label="Email"  placeholder="janedoe@gmail.com"  type ="email"  variant = "outlined"  onChange = { e => setValues({...values, email: e.target.value})}/>
				      <TextField label="Subject"  placeholder="Help with billing"  type ="text" variant = "outlined"  onChange = { e => setValues({...values, subject: e.target.value})}/>
				      <TextField label="Message"  placeholder="Joe Doe"  type ="text"  variant = "outlined" multiline rowsMax = "3" onChange = { e => setValues({...values, message: e.target.value})}/>
				      <Button variant="contained" color="primary" type="submit" onClick = formValidation  >  Submit </Button>
	    		   </form>
    			</div>
			</div>
		</div>
		)	
}
export default CountactUs

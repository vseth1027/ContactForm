import React, {useState, useEffect, useRef } from 'react'
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

 function ContactUs2(){
 	const classes = useStyles();

 	const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

 	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [subject, setSubject] = useState('')
	const [message, setMessage] = useState('')

	const [nameErrorMessage, setNameErrorMessage] = useState('')
	const [emailErrorMessage, setEmailErrorMessage] = useState('')
	const [subjectErrorMessage, setSubjectErrorMessage] = useState('')
	const [messageErrorMessage, setMessageErrorMessage] = useState('')

	const [isSubmit, setIsSubmit] = useState(false)
	const firstRender = useRef(true)

	const formValidation =() =>{
		let isValid = false;
		if(name === ""){
			setNameErrorMessage({nameErrorMessage: 'name field is empty'})
			console.log("emptyname")

		}
		 if(!String(email).match(emailFormat)){
		 	setEmailErrorMessage({emailErrorMessage: 'email is invalid'})
			console.log("bad email")
		}
		 if(subject == ""){
		 	setSubjectErrorMessage({subjectErrorMessage: 'subject field is empty'})
			console.log("empty sub")
		}
		 if(message === ""){
		 	setMessageErrorMessage({messageErrorMessage: 'message field is empty'})
			console.log("empty message")	
		}
		else{
			isValid = true;
			
		}
		console.log(isValid)
}
	const clearState = () =>{
		name = 

	}
	 const handleSubmit = e =>{
	 	e.preventDefault();
	 	if(formValidation()) {
	 		alert("Email sent!")
	 	}

	 }							

	useEffect(() =>{
		if(firstRender.current){
		firstRender.current = false;
		return
	 }
	formValidation();
		}, [isSubmit])

	return(

		<div className = "container">
			<div className = "outerFormContainer"> 
				<img id = "emailIcon"src = "./emailIcon.png"/>	
				<div className = "innerFormContainer">
					<h2> Get in touch </h2>
					<form className = {classes.root} onSubmit = {handleSubmit} >	
				      <TextField label="Name"  placeholder="Jane Doe" type ="text" variant = "outlined" onChange = { e => setName({name: e.target.value})}/>
				      <TextField label="Email"  placeholder="janedoe@gmail.com"  type ="email"  variant = "outlined" onChange = { e => setEmail({email: e.target.value})}/>
				      <TextField label="Subject"  placeholder="Help with billing"  type ="text" variant = "outlined" onChange = { e => setSubject({subject: e.target.value})} />
				      <TextField label="Message"  placeholder="Joe Doe"  type ="text"  variant = "outlined" multiline rowsMax = "3" onChange = { e=> setMessage({message: e.target.value})}/>
				    
				      <Button variant="contained" color="primary" type="submit" onClick = {e => setIsSubmit({isSubmit: true})} >  Submit </Button>
	    		   </form>
    			</div>
			</div>
		</div>
		)
	
} 
export default ContactUs2
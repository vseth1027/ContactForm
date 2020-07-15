import React, {useState, useEffect } from 'react'
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

 	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [subject, setSubject] = useState('')
	const [message, setMessage] = useState('')
	const [errorMessage, setErrorMessage] = useState({})
	const [isValidSubmit, setIsValidSubmit] = useState(false)

	const formValidation =(name, email, subject, message) =>{
	if(name === ""){
		console.log("emptyname")
	}

}
	 const handleSubmit = e =>{
	 	e.preventDefault();
	 	console.log(name, email, subject, message)
	 }

	useEffect(() =>{
	formValidation();
		}, [name])

	return(

		<div className = "container">
			<div className = "outerFormContainer"> 
				<img id = "emailIcon"src = "./emailIcon.png"/>	
				<div className = "innerFormContainer">
					<h2> Get in touch </h2>
					<form className = {classes.root} onSubmit = {handleSubmit} >	
				      <TextField  required label="Name"  placeholder="Jane Doe" type ="text" variant = "outlined" onChange = { e => setName({name: e.target.value})}/>
				      <TextField  required label="Email"  placeholder="janedoe@gmail.com"  type ="email"  variant = "outlined" onChange = { e => setEmail({email: e.target.value})}/>
				      <TextField  required label="Subject"  placeholder="Help with billing"  type ="text" variant = "outlined" onChange = { e => setSubject({subject: e.target.value})} />
				      <TextField  required label="Message"  placeholder="Joe Doe"  type ="text"  variant = "outlined" multiline rowsMax = "3" onChange = { e=> setMessage({message: e.target.value})}/>
				      <Button  variant="contained" color="primary" type="submit"> Submit </Button>
	    		   </form>
    			</div>
			</div>
		</div>
		)
	
} 
export default ContactUs2
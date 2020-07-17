import React, {useState, useEffect, useRef, useReducer } from 'react'
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

const initialState ={
 		name: "",
 		email: "",
 		subject: "",
 		message: "",
 		 errorMessage: [
	 	 	{id: '',
	 	 	value: ''}
 		 ]
 	}

const reducer = (state, action) =>{
 		switch(action.type){
 			case 'SUBMIT_NAME':
 				return{...state, name: action.payload }
 		
 			case 'SUBMIT_EMAIL':
 				return{...state, email: action.payload}

 			case 'SUBMIT_SUBJECT':
 				return{...state, subject: action.payload}

 			case 'SUBMIT_MESSAGE':
 				return{...state, message: action.payload}

 			 case 'NAME_ERROR':
 			 	return {...state, errorMessage: [state.errorMessage.push({id: state.errorMessage.length, value: action.payload})]}
 			case 'RESET':
				return initialState 	

			default:
				return state
		}
 	}

 function ContactUs3(){
 	const classes = useStyles();

 	const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
 	const [state, dispatch] = useReducer(reducer, initialState)
 	const firstRender = useRef(true)
 	const [isSubmit, setIsSubmit] = useState(false)
	//const [errorMessage, setErrorMessage] = useState([])



 	const formValidation =() =>{
 		let isValid = false;
 		if(initialState.name === ""){
 			{dispatch({type: 'NAME_ERROR', payload: "name field is invalid"})}
		console.log("emptyname")

// 		}
// 		//  if(!String(email).match(emailFormat)){
// 		//  	setEmailErrorMessage({emailErrorMessage: 'email is invalid'})
// 		// 	console.log("bad email")
// 		// }
// 		//  if(subject == ""){
// 		//  	setSubjectErrorMessage({subjectErrorMessage: 'subject field is empty'})
// 		// 	console.log("empty sub")
// 		// }
// 		//  if(message === ""){
// 		//  	setMessageErrorMessage({messageErrorMessage: 'message field is empty'})
// 		// 	console.log("empty message")	
// 		// }
// 		// else{
// 		// 	isValid = true;
			
// 		// }
 		console.log(isValid)
 }}


	 const handleSubmit = e =>{
	 	e.preventDefault();
	 	// if(formValidation()) {
	 	// 	alert("Email sent!")
	 	// }
	 	formValidation()

	 }	
	 const resetValues =() =>{
	 	dispatch({type: 'RESET'})
	 	setIsSubmit({isSubmit: !isSubmit})
	 }						

	useEffect(() =>{
		if(firstRender.current){
		firstRender.current = false;
		return
	 }
		handleSubmit()
		resetValues()
	},[handleSubmit(), resetValues()]);


	return(
		<div className = "container">
			<div className = "outerFormContainer"> 
				<img id = "emailIcon"src = "./emailIcon.png"/>	
				<div className = "innerFormContainer">
					<h2> Get in touch </h2>
					<form className = {classes.root} onSubmit = {handleSubmit} >	
				      <TextField label="Name"  placeholder="Jane Doe" type ="text" variant = "outlined" onChange = { e => {dispatch({type: 'SUBMIT_NAME', payload: e.target.value})}}/>
				      <TextField label="Email"  placeholder="janedoe@gmail.com"  type ="email"  variant = "outlined" onChange = { e => {dispatch({type: 'SUBMIT_EMAIL', payload: e.target.value})}}/>
				      <TextField label="Subject"  placeholder="Help with billing"  type ="text" variant = "outlined" onChange = { e => {dispatch({type: 'SUBMIT_SUBJECT', payload: e.target.value})}}/>
				      <TextField label="Message"  placeholder="Joe Doe"  type ="text"  variant = "outlined" multiline rowsMax = "3" onChange = { e => {dispatch({type: 'SUBMIT_MESSAGE', payload: e.target.value})}}/>
				      <Button variant="contained" color="primary" type="submit" onClick = {e => setIsSubmit({isSubmit: !isSubmit})} >  Submit </Button>
	    		   </form>
    			</div>
			</div>
		</div>
		)	
}
export default ContactUs3
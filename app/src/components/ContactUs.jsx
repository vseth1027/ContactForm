import React, {useState} from 'react'

function CountactUs() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [subject, setSubject] = useState('')
	const [message, setMessage] = useState('')
	const [errorMessage, setErrorMessage] = useState({})
	const [isValidSubmit, setIsValidSubmit] = useState(false)

	const formValidation =() =>{
		if (name == ""){
			steNameError()

		}
	}

	return(
		<div className = "container" onSu>
			
			<form className = "contactForm">
				<h2> Get in touch </h2>
				<label htmlFor = "user_name"> name </label>
				<input  placeholder = "john doe" type="text" id="user_name" name="user_name" onChange = { e => setName({name: e.target.value})}/>

				<label htmlFor = "user_email"> email </label>
				<input  placeholder = "john doe" type="email" id="user_email" name="user_email" onChange = { e => setEmail({email: e.target.value})}/>

				<label htmlFor = "subject"> subject </label>
				<input  placeholder = "john doe" type="text" id="subject" name="subject" onChange = { e => setSubject({subject: e.target.value})}/>

				<label htmlFor = "user_message"> message </label>
				<textarea  placeholder = "john doe" id="user_message" name="user_message" onChange = { e=> setMessage({message: e.target.value})}> </textarea>

				<button onChange = {() => setIsValidSubmit({validateSubmit})}>Submit </button>
			</form>
		</div>
		)
}
export default CountactUs
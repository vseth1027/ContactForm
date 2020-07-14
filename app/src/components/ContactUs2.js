import React from 'react'
import {Grid, Input, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch',
    },
  },
}));

export default function ContactUs2(){
	 const classes = useStyles();
	return(
		<div className = "container">
			<div className = "outerFormContainer"> 
				<img id = "emailIcon"src = "./emailIcon.png"/>	
				<div className = "innerFormContainer">
					<h2> Get in touch </h2>
					<form className = {classes.root}>	
				      <TextField  required label="Name"  placeholder="Jane Doe" type ="text" variant = "outlined"/>
				      <TextField  required label="Email"  placeholder="janedoe@gmail.com"  type ="email"  variant = "outlined"/>
				      <TextField  required label="Subject"  placeholder="Help with billing"  type ="text" variant = "outlined" />
				      <TextField  required label="Message"  placeholder="Joe Doe"  type ="text"  variant = "outlined" multiline rowsMax = "3"/>
	    		   </form>
    			</div>
			</div>
		</div>
		)
	
}
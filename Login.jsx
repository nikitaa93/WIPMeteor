import React, { Component } from 'react';
import propTypes from 'prop-types';
import ErrorElement from './Error';

import TextElement from './TextElement';
//import Display from './Display';
// import {user} from '../api/regisDetails.js'
import { browserHistory ,history} from "react-router-dom";


let myCursor;
export class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
          email  : '',
          password : '',
          message : '',
         // messageVisible:''
      }
      
  
    }
    handleSubmit=(event)=>{
        
        event.preventDefault();
        const that=this;
        email = this.email.state.value;
        password = this.password.state.value;
        console.log("????????????????????????????", this.email.state);
        console.log("????????????????????????????", this.password.state);
        if( this.email.state.valid && this.password.state.valid){
            console.log('correct');
            Meteor.call('user_db.find1',email,password,(err,resp)=>{
                console.log( err , '!!' ,resp);
                if(resp == null){
                    this.setState({message : err})
                    
                }
                else if(resp.length>0){
                    this.setState({message : 'Logged in'});
                    console.log('check');
                    that.props.history.push('/App');
                    // that.props.browserHistory.push('/App');
                }
    
                
        })
        }
           
        else 
            this.setState({message : 'Invalid'})
       
    }


    render() {
        console.log('---- Render---');
        let {message}=this.state;
        return (
            
            <center > 
                <h1>Enter your details : {message}</h1>

                <form  className='form-style-1' >
                    
                    <TextElement type= 'email' ref={(input) => this.email = input }  labelName='Email :' name='emailValue' />
                    <br/>
                    <TextElement type= 'password' ref={(input) => this.password = input }labelName='Password :' name='password' />
                    <br/>
                    
                    <button type='submit' value='Submit' onClick={this.handleSubmit.bind(this)} >Login </button>
                </form>
                <h1></h1>  
            </center>
        );
    }
    

   
   
  }

  

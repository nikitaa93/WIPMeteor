import React, { Component } from 'react';
// import { bcrypt} from 'bcrypt';
import propTypes from 'prop-types';
import ErrorElement from './Error';
import TextElement from './TextElement';
import { withTracker } from 'meteor/react-meteor-data';
// import {user} from '../api/regisDetails.js'
import { history } from "react-router-dom";

//import { validate} from './validate'
//let nameV,emailV,passV;
export class Registration extends Component {
    constructor(props) {
      super(props);
      this.state = {
          name : '',
          email :'',
          password :'',
          message : ''
      }
      
  
    }

    handleSubmit=(event)=>{
        
        event.preventDefault();
        email = this.email.state.value;
        password = this.password.state.value;
        name = this.password.state.value;
        console.log("????????????????????????????", this.name.state);
        console.log("????????????????????????????", this.email.state);
        console.log("????????????????????????????", this.password.state);
        if( this.name.state.valid && this.email.state.valid && this.password.state.valid && this.confirmpassword.state.valid)
            Meteor.call('user_db1.insert1',name,email,password);
        else 
            this.setState({message : 'Invalid'})
       
    }
    doSubmit=(event,nameV,emailV,passV)=>{
        event.preventDefault();
        let {name,email,password} = this.state;
        const that=this;
        const saltRounds =10;
        Meteor.call('user_db.insert1',name,email,password);
       
    }
    
    render() {
        console.log('---- Render---');
        const { message} = this.state;
    
    
        return (
          
            <center >
                <h1>Enter your details  {message}</h1>

                <form  className='form-style-1' >
                    <TextElement  type= 'name' ref={(input) => this.name = input } labelName='Name :' name='nameValue'/>
                    <br/>
                    <TextElement type= 'email' ref={(input) => this.email = input } labelName='Email :' name='emailValue' />
                    <br/>
                    <TextElement type= 'password' ref={(input) => this.password = input }labelName='Password :' name='password' />
                    <br/>
                    <TextElement type= 'password'ref={(input) => this.confirmpassword = input } labelName='Confirm Password :' name='confirmPassword'/>
                    <br/>
                    <button type='button' value='Submit' onClick={this.handleSubmit.bind(this)} >Register </button>
                </form>
                
            </center>
        );
    }
    

   
   
  }
  export default withTracker(() => {
    return {
    //   user: Users.find({}).fetch(),
    };
  })(Registration);

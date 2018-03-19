import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import bcrypt from 'bcrypt';
Future = Npm.require('fibers/future');
const myFuture =  new Future();
import Users from '../../server/user'

//export const Users = new Mongo.Collection('user_db');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('Users', function tasksPublication() {
    return Users.find();
  });
}

Meteor.methods({
  
  'user_db1.insert1'(name,email,password) {
    check(email, Match.Users);
    console.log('--26-----', bcrypt)
    const saltRounds = 10;
    console.log(name , 'in metetor method ');
    bcrypt.hash(password, saltRounds).then(function(hash) {
      console.log(hash , '---29----in metetor method ');
      Users.insert({
        name : name,
        email : email,
        password : hash
  
      });
    });
   
  },
  
  'user_db.find'(email,password){
    console.log(email , '--',password)
    Users.find({
      $and : [
      {email : email},
      {password : password}]
    }).fetch();
  },
  'user_db.find1'(email,password){
    console.log(email)
    var x = Users.findOne({
      email: email
      })
      console.log ('--33',x)
      console.log ('--34',x.password)
      var hash = x.password
      var setflag = 0;
      console.log(hash);
      
      
      bcrypt.compare(password, hash).then(function (res) {
      // res == true
      setflag = 1;
      console.log("Yes i am Here ",setflag);
      myFuture.return(x.email)
      })
      return myFuture.wait();
      
      
      
      
    
  //   console.log(email , '--',password)
    
  //   const saltRounds = 10;
  //   bcrypt.hash(password, saltRounds).then(function(hash) {
  //     console.log(hash , '---29----in metetor method ');
      
  //   });
  //  // console.log(user_data);
  //   bcrypt.compare(password, hash).then(function(res) {
  //     Users.find({
  //       $and : [
  //       {email : email},
  //       {password : hash}]
  //     }).fetch();
  // });
  },
 
  
  // 'user_db.remove'(taskId) {
  //   check(taskId, String);

  //   Users.remove(taskId);
  // },
  // 'user_db.setChecked'(taskId, setChecked) {
  //   check(taskId, String);
  //   check(setChecked, Boolean);

  //   Users.update(taskId, { $set: { checked: setChecked } });
  // },
  // 'user_db.setPrivate'(taskId, setToPrivate) {
  //   check(taskId, String);
  //   check(setToPrivate, Boolean);

  //   const task = Users.findOne(taskId);

  //   // Make sure only the task owner can make a task private
  //   if (task.owner !== this.userId) {
  //     throw new Meteor.Error('not-authorized');
  //   }

  //   Users.update(taskId, { $set: { private: setToPrivate } });
  // },
});
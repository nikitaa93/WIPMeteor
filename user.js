import SimpleSchema from 'simple-schema';

let UserSchema = new SimpleSchema({
    name     :  {
        type     : String,
        //match    :  /[a-z][A-z]/,
        unique   : true,
        //validate:   nameValidator,
        required : true
    },
    email    : {
        type : String,
        //match: /\S+@\S+\.\S+/,
        //type     : mongoose.SchemaTypes.Email,
        unique   : true,
        required : true
    },
        
    password : {
        type     : String,
        unique   : true,
        required : true,
        
    } 
});

export default Users = new Meteor.Collection("user_db1", { schema: UserSchema });






const mongoose = require('mongoose')

const Schema = mongoose.Schema;


const userSchema = new Schema({
    
    // username : string : required
    username : {
        type: String,
        required : true,
        minlength: 3,  // Minimum length of 3 characters
        maxlength: 30, // Maximum length of 30 characters
    },
    
    // email : string : required
    email : {
        type: String,
        required : true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ // Regular expression for validating email format
    },

    // hashedPassword : string : required
    hashedPassword : {
        type : String,
        required : true,
    },

    //role : string : required
    role : {
        type: String,
        required : true,
        enum: ['admin', 'client','iot'],
    }

});

module.exports = mongoose.model("User", userSchema);
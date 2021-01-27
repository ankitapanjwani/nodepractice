const mongoose = require('mongoose');
const User = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    date: {
        type:Date,
        default: Date.now
    }
});
//1st parameter: name_of_table  2nd parameter: name_of_schema
module.exports = mongoose.model('User',User);
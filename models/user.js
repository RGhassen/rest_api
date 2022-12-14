let mongoose = require ('mongoose') ;

let UserSchema = new mongoose.Schema ({
    name : {
        type : String,
        required : true ,
    } ,
    lastname : {
        type : String ,
        required : true ,
    },
    age : Number
}) ;

module.exports = User = mongoose.model("user" , UserSchema) ;
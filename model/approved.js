const mongoose = require("mongoose");

//connecting DB
mongoose.connect("mongodb+srv://suhailkhan:suhailkhan123@cluster0.sbtqv0i.mongodb.net/?retryWrites=true&w=majority")

//schema creation
const Schema = mongoose.Schema;
var donorSchema = new Schema({
    userName:String,
    userAge:Number,
    userEmail:String,
    userPassword:String,
    userMobile:String,
    userBloodGroup:String,
    userType:String,
    userAilments:String,
    userAmount:Number
})
//model creation
var approved = mongoose.model("approved",donorSchema);
//exporting
module.exports = approved;
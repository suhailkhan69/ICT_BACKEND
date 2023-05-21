const mongoose = require("mongoose");
//Connecting Database
mongoose.connect("mongodb+srv://suhailkhan:suhailkhan123@cluster0.sbtqv0i.mongodb.net/?retryWrites=true&w=majority")
//Schema Creation
const Schema = mongoose.Schema;
var userSchema = new  Schema({
    userName:String,
    userAge:Number,
    userEmail:String,
    userPassword:String,
    userMobile:String,
    isAdmin:Boolean
});
//4.Set up collections
UserInfo = mongoose.model("user",userSchema)
//5.Exporting
module.exports=UserInfo;
const express = require("express");
const session = require("express-session")
const donor = require("./model/donor");
const app = new express();
const passport = require("passport");
const bodyParser = require("body-parser");
const LocalStrategy = require("passport-local");
const passportLocalMongoose =  require("passport-local-mongoose");

var cors = require('cors');
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',function(req,res){
    res.send("hello");
})
app.post("/user/request",(req,res)=>{
    var donors = new donor(req.body);//passing to DB
    donors.save();//save to DB
    })

app.get("/user/view",async (req,res)=>{
       var result = await donor.find({});
       res.json(result);
    })
 app.post("/admin/update",async (req,res)=>{
        var result = await donor.findByIdAndUpdate(req.body._id,req.body);
        res.send("success");
    })
 app.post("/admin/delete",async (req,res)=>{
        var result=await donor.findByIdAndDelete(req.body._id);
        res.send("deleted");
    })

    
    
app.listen(6901,()=>{
    console.log("server running at port 6901")
})
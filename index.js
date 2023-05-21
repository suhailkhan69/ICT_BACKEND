const express = require("express");
const donor = require("./model/donor");
require('dotenv').config()
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const jwt = require('jsonwebtoken')

const app = new express();
const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if (authorization && authorization.startsWith('Bearer ')) {
      return authorization.replace('Bearer ', '')
    }
    return null
  }

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
    app.use('/users', usersRouter)
    app.use('/login', loginRouter)

 app.post("/admin/update",async (req,res)=>{
        var result = await donor.findByIdAndUpdate(req.body._id,req.body);
        res.send("success");
    })
 app.post("/admin/delete",async (req,res)=>{
        var result=await donor.findByIdAndDelete(req.body._id);
        res.send("deleted");
    })

    const PORT = process.env.PORT || 6901
    
app.listen(6901,()=>{
    console.log("server running at port 6901")
})
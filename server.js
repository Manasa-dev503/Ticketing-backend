require('dotenv').config()
var User = require('./User.model')
var Ticket = require('./Ticket.model')
var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post("/register",function(req,res){
   // console.log(req.body)
    var newuser = new User(req.body)
    newuser.save()

})

app.post("/login",function(req,res){
        // console.log(req.body)
    User.find().then(function(data){
        // console.log(data)
        var logindata = data.filter(function(login){
            if(login.username === req.body.username && login.password == req.body.password ){
               return true
            }
         })
         //console.log(logindata)
         res.json(logindata)
        
    })
})

app.post("/ticket",function(req,res){
    //console.log(req.body)
    var ticket = new Ticket(req.body)
    ticket.save()
    res.json(ticket)
    
})


app.get("/ticketlist",function(req,res){
    Ticket.find().then(function(data){
        //console.log(data)
        res.json(data)
    })

})

app.get("/managerdashboard",function(req,res){
    Ticket.find().then(function(data){
        res.json(data)
    })
})

app.get("/employee",function(req,res){
    User.find({role:'employee'}).then(function(data){
        res.json(data)
    })
})

app.put("/updateticket/:id",function(req,res){
    console.log(req.body)
    Ticket.findByIdAndUpdate({_id:req.params.id},req.body)
    .then(function(data){
       // console.log(data)
        res.send("Assigned ticket received")
    })

})


app.get("/employeedashboard",function(req,res){
    Ticket.find().then(function(data){
        console.log(data)
        res.json(data)
    })
})



app.listen(process.env.PORT,function(){
    console.log("server is running on "+process.env.PORT)

})



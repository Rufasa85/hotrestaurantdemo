const express = require("express");
const path = require("path")
const app = express();

const PORT = process.env.PORT || 3000;
//DATA 
const tables = [
    {
        name:"Joe",
        phone:"123-456-7890",
        email:"joe@joe.joe"
    }
]

const waitlist = [
    {
        name:"slowpoke",
        phone:"123-456-9999",
        email:"slow@lazy.oops"
    }
]
//Middleware for parsing req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//HTML ROUTES
app.get('/',function(req,res){
    // res.send("welcome to my website")
    res.sendFile(path.join(__dirname,"index.html"))
})

app.get('/tables',function(req,res){
    // res.send("will be tables.html")
    res.sendFile(path.join(__dirname,"tables.html"))
})

app.get('/reserve',function(req,res){
    // res.send("will be reserve.html")
    res.sendFile(path.join(__dirname,"reserve.html"))
})

//DATA ROUTES

app.get('/api/tables',function(req,res){
    res.json(tables);
})

app.get('/api/waitlist',function(req,res){
    //sends back waitlist JSON data
    res.json(waitlist);
})

app.post("/api/tables",function(req,res){
    if(tables.length<5){
        tables.push(req.body)
    } else {
        waitlist.push(req.body)
    }
    res.json(req.body);
})
//listener
app.listen(PORT,function(){
    console.log(`listenin to the smooth sounds of port ${PORT}`)
})
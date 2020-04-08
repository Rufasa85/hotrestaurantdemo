const express = require("express");
const router = express.Router();

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

router.get('/tables',function(req,res){
    res.json(tables);
})

router.get('/waitlist',function(req,res){
    //sends back waitlist JSON data
    res.json(waitlist);
})

router.post("/tables",function(req,res){
    if(tables.length<5){
        tables.push(req.body)
    } else {
        waitlist.push(req.body)
    }
    res.json(req.body);
})

module.exports = router;
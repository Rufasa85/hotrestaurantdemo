const express = require('express');
const router = express.Router();
const path = require("path");

router.get('/',function(req,res){
    // res.send("welcome to my website")
    res.sendFile(path.join(__dirname,"../index.html"))
})

router.get('/tables',function(req,res){
    // res.send("will be tables.html")
    res.sendFile(path.join(__dirname,"../tables.html"))
})

router.get('/reserve',function(req,res){
    // res.send("will be reserve.html")
    res.sendFile(path.join(__dirname,"../reserve.html"))
})

module.exports= router;
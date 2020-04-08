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

app.use(express.static("public"))


//HTML ROUTES
const htmlRoutes = require("./routes/htmlRoutes");
app.use(htmlRoutes);
//DATA ROUTES
const apiRoutes = require("./routes/apiRoutes")
app.use("/api",apiRoutes);
//listener
app.listen(PORT,function(){
    console.log(`listenin to the smooth sounds of port ${PORT}`)
})
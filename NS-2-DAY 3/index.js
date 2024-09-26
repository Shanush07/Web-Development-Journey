const express = require("express");
const path = require("path");
const app = express();

const port = 8080;

app.listen(port, ()=>{
    console.log("Listening");
})

app.set("views",path.join(__dirname,"/views"));
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("home.ejs");
})

app.get("/getRandomNumber",(req,res)=>{
    let diceVal = Math.floor(Math.random()*6)+1;
    res.render("randomNumber.ejs",{diceVal});
})

app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    console.log(data);
    res.render("instagram.ejs",{data});
})
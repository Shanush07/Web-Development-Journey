const express = require("express");
const app = express()

// console.dir(app);

let port = 3000;

app.listen(port, ()=>console.log("App is listening through port"));

//USING APP.USE()
// app.use((req,res)=>{
//     // console.log("Request Recieved");
//     // res.send("This is a basic response");

//     res.send({"fruit": "apple",
//         "color": "red",
//     });
// }); 

//USING APP.GET()
// app.get("/",(req,res)=>{
//     res.send("Landed through the request.");    
// });

// app.get("/ichigo",(req,res)=>{
//     res.send("Landed through the request on BLEACH.");    
// });

// app.get("/luffy",(req,res)=>{
//     res.send("Landed through the request on ONE PIECE.");    
// });

// app.get("/naruto",(req,res)=>{
//     res.send("Landed through the request on NARUTO.");    
// });

// app.get("*",(req,res)=>{
//     res.send("THIS PAGE DOESNT EXISTno");    
// });

app.get("/:username/:id",(req,res)=>{
    let {username, id} = req.params;
    res.send(`Username @${username} @ID: ${id}`);    
});


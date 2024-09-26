const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended: true}));

app.get("/register", (req, res) => {
    let { user,pass } = req.query;
    res.send(`Standard GET Response<br><h1>Welcome @${user}</h1>`);
});

app.post("/register", (req, res) => {
    let {user,pass} = req.body;
    res.send(`Standard POST Response<br><h1>Welcome @${user}</h1>`);
});

app.listen(port, () => {
    console.log(`Listening to port: ${port}...`);
});

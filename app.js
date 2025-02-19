const express = require('express');
const chalk = require('chalk')
const debug = require('debug')('app');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname,"/public/")));

app.get("/", (req,res) => {
    res.send('Hello Express');

})

app.listen(port, ()=>{
   debug(console.log("Listening on port " + port));
 
})
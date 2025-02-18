const express = require('express');
const chalk = require('chalk')
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();
const port = 3000;

app.get("/", (req,res) => {
    res.send('Hello Express');


})

app.listen(port, ()=>{
   debug(console.log("Listening on port " + port));
 
})
const express = require('express');
const chalk = require('chalk')
const debug = require('debug')('app');
const path = require('path');

const app = express();
const PORT = process.env.PORT;

//app.use(express.static(path.join(__dirname,"/public/")));

app.set("views","./src/views");
app.set("view engine", "ejs");

app.get("/", (req,res) => {
    res.render('index',{username: 'Kitti-Bank', customers: ['Maria','Wataya','Haruji']});

})

app.listen(PORT, ()=>{
   debug(console.log("Listening on port " + PORT));
 
})
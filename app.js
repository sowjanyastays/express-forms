const express = require('express');
const home = require("./routes/homeRoute.js");
const about = require("./routes/aboutRoute.js");
const feedback = require("./routes/feedbackRoute.js");
const conatct = require("./routes/contactRoute.js");
const services = require("./routes/servicesRoute.js");
const app = express();

app.use('/',home);
app.use('/contact',conatct);
app.use('/feedback',feedback);
app.use('/about',about);
app.use('/services',services);


app.listen(3500,()=>{
    console.log("Listeing to port 3500");
})
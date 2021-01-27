const express = require('express');
//express js is used to connect to apis.
const app = express();
const userroutes = require('./routes/user');

const mongoose = require('mongoose');
const env = require('dotenv/config');
app.use(express.json());

app.use('/api/',userroutes);


mongoose.connect(process.env.DB,{useNewUrlParser: true, useUnifiedTopology: true },(err)=>{
    if(err) return console.log(err.message);

    console.log('Database connected');
});



//one way of listening to port
app.listen(3010,()=>{
    console.log('Server is up and running!!! ');
});   


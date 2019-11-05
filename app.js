const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//MIDDLEWARES
// app.use('/post', ()=>{
//     console.log('hey bro gg')
// });

//IMPORTS routes from /routes/Post
const postsRoute = require('./routes/post') ;

//when /post is added to url the postroute func is activated
app.use('/post', postsRoute);
//ROUTES
app.get('/', (req,res) =>{
    res.send('we did it boys');
});


//CONNECTS TO DATABA E
mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true },
()=>console.log('we are in the system'))

//HOW DO WE START LISTENING TO THE SERVER ?""
app.listen(3000);
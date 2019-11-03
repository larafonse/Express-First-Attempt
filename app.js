const express = require('express');

const app = express();
//middlewares
app.use('/post', ()=>{
    console.log('hey bro gg')
});
//routes
app.get('/', (req,res) =>{
    res.send('we did it boys');
});

app.get('/post', (req,res) =>{
    res.send('we are still doing it boys')
});
//how do we stat listening to the server?
app.listen(8080);
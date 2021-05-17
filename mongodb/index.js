const express = require('express');
const app = express();
app.use(express.json());
app.use('/user',require('./route/api'));

app.listen(5000,()=>
{
    console.log("Server started at port 5000");
})

const express = require('express');
const app = express();
const members = require('./Members');
const logger = require('./middleware/logger');


//init middleware
app.use(logger);


//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/members',require('./route/api/members'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log(`server started on port ${PORT} `));


const express = require('express');
const connectDB = require('./DB/DB')
const app = express();
const dotenv = require ('dotenv').config ;
const path = require ('path') ;
const userRouter = require('./routes/route')

app.use(express.json());

app.use('/', userRouter) ;
dotenv({path:__dirname + '/config/.env'});


connectDB()
app.listen(5000,(err)=>{
    err?console.log(err):console.log('server is runnig on port 5000')
})
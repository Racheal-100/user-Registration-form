const express = require('express');
const app= express();
const mongoose = require ("mongoose");
const UserRouter = require('./ROUTE/UserRouter');
const UserModel = require('./MODEL/usermodel');

 const connection = mongoose.connect("mongodb://localhost:27017/Registration");

 connection.then(
     () => console.log("connection to database successful")
 );

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));



app.use('/api/user', UserRouter);

app.listen(5000, console.log("run in port 5000"));
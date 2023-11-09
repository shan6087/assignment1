//import mongoose in db.js file
const mongoose = require('mongoose')
mongoose.set('strictQuery',false);

//using mongoose define connection string

mongoose.connect('mongodb://localhost:27017/bookstore',()=>{
    console.log('MongoDB connected successfully')
})

//create model for the project
//collection - users

const User = mongoose.model('user',{
    uname:String,
    email:String,
    pswd:String
})

const Book = mongoose.model('book',{
 name:String,
author:String,
title:String,
category:String,
publishedyear: Number
})

//export model
module.exports={
    User,
    Book
}



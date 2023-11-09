//import express inside index .js
const express = require('express')

//import cors in index.js
const cors = require('cors')

//import dataservice
const dataService = require('./services/dataService')

//create server app
const server = express()


//use cors to define origin
server.use(cors({
    origin:'http://localhost:3000'
}))

//to parse json data
server.use(express.json())

// set up port for server app
server.listen(3000,()=>{
    console.log('server started at 3000');
})


//register api call resolving
server.post('/register',(req,res)=>{
    console.log('Inside register function');
    console.log(req.body);
    //asynchronus 
    dataService.register(req.body.uname,req.body.email,req.body.pswd)
    .then((result)=>{
        res.status(result. statuscode).json(result)
        
    })

})

//login api call resolving
server.post('/login',(req,res)=>{
    console.log('Inside login function');
    console.log(req.body);
    //asynchronus 
    dataService.login(req.body.email,req.body.pswd)
    .then((result)=>{
        res.status(result. statuscode).json(result)
        
    })

})
// create book api resolving
server.post('/createbooks',(req,res)=>{
    console.log('inside createbooks function');
    console.log(req.body);
    // asychronous
    dataService.createbook(req.body.name,req.body.author,req.body.title,req.body,category,req.body.publishedyear)
    .then((result)=>{
        res.status(result.statuscode).json(result)
    })
})

// edit book api resolving 
server.put ('/createbooks',(req,res)=>{
    console.log('inside function');
    console.log(req.body);
    // asynchronous
    dataService.updateBook(req.body.name,req.body.author,req.body.title,req.body,category,req.body.publishedyear)
    .then((result)=>{
        res.status(result.statuscode).json(result)
    })
})

// list book api resolving 
server.get ('/createbooks',(req,res)=>{
    console.log('inside function');
    console.log(req.body);
    // asynchronous
    dataService.updateBook(req.body.name,req.body.author,req.body.title,req.body,category,req.body.publishedyear)
    .then((result)=>{
        res.status(result.statuscode).json(result)
    })
})

// delete book api resolving 
server.delete ('/createbooks',(req,res)=>{
    console.log('inside function');
    console.log(req.body);
    // asynchronous
    dataService.updateBook(req.body.name,req.body.author,req.body.title,req.body,category,req.body.publishedyear)
    .then((result)=>{
        res.status(result.statuscode).json(result)
    })
})

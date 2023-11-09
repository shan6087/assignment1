//import db.js
const db = require('./db')




//register
const register =(uname,email,pswd)=>{
    //check acno is in mongodb- db.users.findOne()
   return db.User.findOne({
        email
    }).then((result)=>{
        console.log(result);
        if(result){
            return{
                statuscode:403,
                message:'Account already exists!!'
            }
        }
        else{
            //to add new user
            const newUser = new db.User({
                username:uname,
                password:pswd,
                email:email,
               
            })
            //to save new user in mongodb use save()
            newUser.save()
            return {
                statuscode:200,
                message:'Registration successfull...'
            }
        }
    })
}

//login
const login = (email,pswd)=>{
    console.log('inside login function body');


//check email,pswd in mongodb
return db.User.findOne({
    email,
    password:pswd
}).then(
    (result)=>{
         if(result){
          
        return{
            statuscode:200,
            message:'login successful',
        email:result.email,
            currentemail:email,
        }
    }

    else{
          return{
            statuscode:404,
            message:'invalid account or password'
        }
    }
})
}

// create books
const createbook = (name,author,title,category,publishedyear)=>{
       //check name is in mongodb-
   return db.Book.findOne({
    name
}).then((result)=>{
    console.log(result);
    if(result){
        return{
            statuscode:403,
            message:'name already exists!!'
        }
    }
    else{
        //to add new user
        const newBook = new db.Book({
            name:name,
            author:author,
            title:title,
            category:category,
            publishedyear:publishedyear
           
        })
        //save new user in mongodb use save()
        newBook.save()
        return {
            statuscode:200,
            message:'new book has been added successfully.....'
        }
    }
})
}

// update book
const updateBook = (name,author,title,category,publishedyear)=>{
    // check whether all the parameters are available

    return db.Book.map({
        name,author,title,category,publishedyear
    }).then((result)=>{
        console.log(result);
        if(result){
           
        }
        else {
            // update the current book
         const update = new db.Book({
            name:"",
            author:"",
            title:"",
            category:"",
            publishedyear: ""
         })
        //  save
        update.save()
        return{
            statuscode:200,
            message:'updations has been made successfully........'
        }
        }
    })
}
// list book
const getBook = (name,author,title,category,publishedyear)=>{
    // check whether all parameters are available
    return db.Book.map({
        name,author,title,category,publishedyear

    }).then((result)=>{
        console.log(result);
        if(result){
          
        }
        else{
            
            const list = new db.Book({
                name:name,
                author:author,
                title:title,
                category:category,
                publishedyear: publishedyear
             })
             list.save
            return{
                statuscode:403,
                message:'book not found'
            }
        }
    })
}
// delete
const delBook = (name,author,title,category,publishedyear)=>{
    // map functions
    return db.Book.map({
        name,author,title,category,publishedyear

    }).then((result)=>{
        console.log(result);
        if(result){
            
            
            
        }
        else{

             // update the current book
         const del = new db.Book({
            name:name,
            author:author,
            title:title,
            category:category,
            publishedyear: publishedyear
         })
        //  save
        del.save()

        }
    })
}



//export
module.exports={
    register,
    login,
    createbook,
    updateBook,
    getBook,
    delBook

}

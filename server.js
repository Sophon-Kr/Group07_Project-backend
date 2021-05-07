//----------------------------------------------------------------//
var express = require('express')
var app = express()
var fs = require('fs') //Read user.json

//get = read-----------------------------------------------------
app.get('/getUsers', function(req,res){
    fs.readFile(__dirname+"/"+"user.json", 'utf8', function(err,data){
        console.log(data) // user.json data read print at monitor
        res.end(data) // print at web
    })
})
//get = read-----------------------------------------------------

app.get('/getUsers/:id', function(req,res){
    fs.readFile(__dirname+"/"+"user.json", 'utf8', function(err,data){
        var users = JSON.parse(data) // change String to JSON obj
        var user =users["user"+req.params.id] // params receive from url 
        
        
        console.log(user) // user.json data read
        res.end(JSON.stringify(user)) // print at web (cannot obj only html string)
    })
})

// post = add , insert-----------------------------------------
app.post('/adduser', function(req,res){
    fs.readFile(__dirname+"/"+"user.json", 'utf8', function(err,data){
        var users = JSON.parse(data) // change String to JSON obj
        var user ={ 
                                "name" : "Betty",
                                "password" : "4444",
                                "occupation" : "engineer",
                                "id" : 4
                            }
        users["user4"] = user
       
        console.log(users) // user.json data read
        res.end(JSON.stringify(users)) // print at web (cannot obj only html string)
    })
})

//-----------------------------------------------------------
// delete
app.delete('/deluser/:id', function(req,res){
    fs.readFile(__dirname+"/"+"user.json", 'utf8', function(err,data){
        var users = JSON.parse(data) // change String to JSON obj
        delete users['user'+req.params.id]
        
        console.log(users) // user.json data read
        res.end(JSON.stringify(users)) // print at web (cannot obj only html string)
    })
})
//put = edit หาเองงงงง-----------------------------------------------------



var server = app.listen(5000, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Application run at http://%s:%s", host, port)
})

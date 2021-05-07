
var express = require('express')
var app = express()

port = process.env.PORT || 5000
mongoose = require('mongoose')

User = require('./api/model/userListModel')
bodyParser = require('body-parser')


const uri ="mongodb+srv://sophon:26647@cluster0.iskfx.mongodb.net/ContactList" 

mongoose.Promise = global.Promise
mongoose.connect(uri, function(error){
    if(error) throw error
    console.log('Sucessfully connected')
})

const cors = require('cors')
app.use(cors())

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

var routes = require('./api/routes/userListRoutes')
routes(app)
app.listen(port)
console.log('User List Server started on : '+port)

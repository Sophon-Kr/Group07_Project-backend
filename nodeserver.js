
var express = require('express')
var app = express()

port = process.env.PORT || 5000
mongoose = require('mongoose')

User = require('./api/model/userListModel')
Answer = require('./api/model/answerListModel')
Article = require('./api/model/articleListModel')
Post = require('./api/model/postListModel')
Question = require('./api/model/questionListModel')
UsrComment = require('./api/model/usrCommentListModel')

bodyParser = require('body-parser')


const uri ="mongodb://localhost/UserDb" 

mongoose.Promise = global.Promise
mongoose.connect(uri, function(error){
    if(error) throw error
    console.log('Sucessfully connected')
})

const cors = require('cors')
app.use(cors())

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

var userRoutes = require('./api/routes/userListRoutes')
var answerRoutes = require('./api/routes/answerListRouts')
var articleRoutes = require('./api/routes/articleListRouts')
var postRoutes = require('./api/routes/postListRoutes')
var questionRoutes = require('./api/routes/questionListRouts')
var usrCommentRoutes = require('./api/routes/usrCommentListRouts')
answerRoutes(app)
userRoutes(app)
articleRoutes(app)
postRoutes(app)
questionRoutes(app)
questionRoutes(app)
usrCommentRoutes(app)

app.listen(port)
console.log('User List Server started on : '+port)

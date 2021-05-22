'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var AnswerSchema = new Schema({
    answerDesc: {
        type: String,
        Required: 'Please enter'
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    userId:{
        type: String,
        default: null
    }
     
})

module.exports = mongoose.model('Answers', AnswerSchema)
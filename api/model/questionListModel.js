//questionListModel.js
'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var QuestionSchema = new Schema({
    questionTopic:{
        type: String,
        Required: 'Please enter'
    },
    questionDesc: {
        type: String,
        Required: 'Please enter'
    },
    pic: {
        type: String,
        default: null
    },
    like: {
        type: Number,
        default: 0
    },
    answerID: {
        type: Array,
        default: null
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
    
})

module.exports = mongoose.model('Questions', QuestionSchema)
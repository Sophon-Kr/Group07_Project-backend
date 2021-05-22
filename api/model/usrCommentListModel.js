'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UsrCommentSchema = new Schema({
    usrCommentDesc: {
        type: String,
        Required: 'Please enter'
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    userId:{
        type: Array,
        default: null
    }
    
})

module.exports = mongoose.model('UsrComments', UsrCommentSchema)
//questionListModel.js
'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var PostSchema = new Schema({
    postDesc: {
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
    commentID: {
        type: Array,
        default: null
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
    
})

module.exports = mongoose.model('Posts', PostSchema)
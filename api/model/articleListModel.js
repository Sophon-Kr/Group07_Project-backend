'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ArticleSchema = new Schema({
    articleNm: {
        type: String,
        Required: 'Please enter'
    },
    articleDesc: {
        type: String,
        Required: 'Please enter'
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    like:{
        type: Number,
        default: 0
    },
    userId:{
        type: String,
        default: null
    },
    category:{
        type:String,
        default:null
    },
    pic: {
        type: String,
        default: null
    }
     
})

module.exports = mongoose.model('Articles', ArticleSchema)
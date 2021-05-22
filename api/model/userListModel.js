//userListModel.js
'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
    
    firstname: {
        type: String,
        Required: 'Please enter'
    },
    lastname: {
        type: String,
        Required: 'Please enter'
    },
    email: {
        type: String,
        Required: 'Please enter'
    },
    password:{
        type: String,
        Required: 'Please enter'
    },
    profileImage: {
        type: String,
        default: null
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    postID: {
        type: Array,
        default:null        
    },
    followingID: {
        type: Array,
        default: null
    },
    followerID: {
        type: Array,
        default:null
    }
})

module.exports = mongoose.model('Users', UserSchema)
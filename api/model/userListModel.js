// // เพื่อรับข้อมูลจากดาต้าเบสมาใส่ในโปรแกรมได้ = crate schema = set ของตัวแปรที่บอกไทป์ของข้อมูล

// 'use strict'

// var mongoose = require('mongoose')
// var Schema = mongoose.Schema

// // ชื่อต้องตรงกับดาต้าเบส ไม่งั้นข้อมูลไม่เข้า
// var UserSchema = new Schema({
//     firstName:{
//         type: String,
//         Required: 'Please enter'   
//     },
//     lastName:{
//         type: String,
//         Required: 'Please enter'   
//     },
//     email:{
//         type: String,
//         Required: 'Please enter'   
//     },
//     createdDate:{
//         type: Date,
//         default: Date.now
//     }
//     //timestamp -> log in database

// })

// module.exports = mongoose.model('Users',UserSchema) // load users (lowercase) into Useschema (connect DB in nodeserver.js)


'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
    userid: {
        type: String,
        Required: 'Please enter'
    },
    firstname: {
        type: String,
        Required: 'Please enter'
    },
    lastname: {
        type: String,
        Required: 'Please enter'
    },
    middlename: {
        type: String,
        Required: 'Please enter' //จะ return error ถ้ามะมีค่านี้
    },
    gender: {
        type: String,
        Required: 'Please enter'
    },
    email: {
        type: String,
        Required: 'Please enter'
    },
    mobile: {
        type: String,
        Required: 'Please enter'
    },
    facebook: {
        type: String,
        Required: 'Please enter'
    },
    imageurl: {
        type: String,
        Required: 'Please enter'
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    
})

module.exports = mongoose.model('Contacts', UserSchema)
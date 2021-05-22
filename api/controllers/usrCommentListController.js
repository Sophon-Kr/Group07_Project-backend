//usrCommentListComtroller.js
'use strict'
var mongoose = require('mongoose')
UsrComment = mongoose.model('UsrComments')

exports.listAllUsrComment = function (req, res) {
    var query = {
        sort: {
            createdDate: 1
        }
    }
    UsrComment.find({}, null, query, function (err, usrComment) {
        if (err) throw err
        res.json(usrComment)
    })
}
exports.readAUsrComment = function (req, res) {
    UsrComment.findById(req.params.usrCommentId, function (err, usrComment) {
        if (err) throw err
        res.json(usrComment)
    })
}
exports.createAUsrComment = function (req, res) {
    var newUsrComment = new UsrComment(req.body)

    newUsrComment.save(function (err, usrComment) {
        if (err) throw err
        res.json(usrComment)
    })
}
exports.updateAUsrComment = function (req, res) {
    console.log(req.params.usrCommentId)
    var newUsrComment = {}
    newUsrComment = req.body
    console.log(newUsrComment)
    UsrComment.findByIdAndUpdate(req.params.usrCommentId, newUsrComment, {
        new: true
    }, function (err, usrComment) {
        if (err) throw err
        console.log(usrComment)
        res.json(usrComment)
    })
}
exports.deleteAUsrComment = function (req, res) {
    console.log(req.params.usrCommentId)
    UsrComment.findByIdAndRemove(req.params.usrCommentId, function (err, usrComment) {
        if (err) throw err
        const response = {
            message: "Delete usrComment id: " + req.params.usrCommentId + " successfully",
            id: usrComment._id
        }
        res.json(response)
    })
}
//postListController.js
'use strict'
var mongoose = require('mongoose')
Post = mongoose.model('Posts')

exports.listAllPost = function (req, res) {
    var query = {
        sort: {
            timestamp: 1
        }
    }
    Post.find({}, null, query, function (err, post) {
        if (err) throw err
        res.json(post)
    })
}
exports.readAPost = function (req, res) {
    Post.findById(req.params.postId, function (err, post) {
        if (err) throw err
        res.json(post)
    })
}
exports.createAPost = function (req, res) {
    var newPost = new Post(req.body)

    newPost.save(function (err, post) {
        if (err) throw err
        res.json(post)
    })
}
exports.updateAPost = function (req, res) {
    console.log(req.params.postId)
    var newPost = {}
    newPost = req.body
    console.log(newPost)
    Post.findByIdAndUpdate(req.params.postId, newPost, {
        new: true
    }, function (err, post) {
        if (err) throw err
        console.log(post)
        res.json(post)
    })
}
exports.deleteAPost = function (req, res) {
    console.log(req.params.postId)
    Post.findByIdAndRemove(req.params.postId, function (err, post) {
        if (err) throw err
        const response = {
            message: "Delete post id: " + req.params.postId + " successfully",
            id: post._id
        }
        res.json(response)
    })
}
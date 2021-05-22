//articleListComtroller.js
'use strict'
var mongoose = require('mongoose')
Article = mongoose.model('Articles')

exports.listAllArticle = function (req, res) {
    var query = {
        sort: {
            like: 1
        }
    }
    Article.find({}, null, query, function (err, article) {
        if (err) throw err
        res.json(article)
    })
}
exports.readAnArticle = function (req, res) {
    Article.findById(req.params.articleId, function (err, article) {
        if (err) throw err
        res.json(article)
    })
}
exports.createAnArticle = function (req, res) {
    var newArticle = new Article(req.body)

    newArticle.save(function (err, article) {
        if (err) throw err
        res.json(article)
    })
}
exports.updateAnArticle = function (req, res) {
    console.log(req.params.articleId)
    var newArticle = {}
    newArticle = req.body
    console.log(newArticle)
    Article.findByIdAndUpdate(req.params.articleId, newArticle, {
        new: true
    }, function (err, article) {
        if (err) throw err
        console.log(article)
        res.json(article)
    })
}
exports.deleteAnArticle = function (req, res) {
    console.log(req.params.articleId)
    User.findByIdAndRemove(req.params.articleId, function (err, article) {
        if (err) throw err
        const response = {
            message: "Delete article id: " + req.params.articleId + " successfully",
            id: article._id
        }
        res.json(response)
    })
}
//questionListComtroller.js
'use strict'
var mongoose = require('mongoose')
Question = mongoose.model('Questions')

exports.listAllQuestion = function (req, res) {
    var query = {
        sort: {
            _id: 1
        }
    }
    Question.find({}, null, query, function (err, question) {
        if (err) throw err
        res.json(question)
    })
}
exports.readAQuestion = function (req, res) {
    Question.findById(req.params.questionId, function (err, question) {
        if (err) throw err
        res.json(question)
    })
}
exports.createAQuestion = function (req, res) {
    var newQuestion = new Question(req.body)

    newQuestion.save(function (err, question) {
        if (err) throw err
        res.json(question)
    })
}
exports.updateAQuestion = function (req, res) {
    console.log(req.params.questionId)
    var newQuestion = {}
    newQuestion = req.body
    console.log(newQuestion)
    Question.findByIdAndUpdate(req.params.questionId, newQuestion, {
        new: true
    }, function (err, question) {
        if (err) throw err
        console.log(question)
        res.json(question)
    })
}
exports.deleteAQuestion = function (req, res) {
    console.log(req.params.questionId)
    User.findByIdAndRemove(req.params.questionId, function (err, question) {
        if (err) throw err
        const response = {
            message: "Delete question id: " + req.params.questionId + " successfully",
            id: question._id
        }
        res.json(response)
    })
}
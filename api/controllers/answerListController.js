//answerListComtroller.js
'use strict'
var mongoose = require('mongoose')
Answer = mongoose.model('Answers')

exports.listAllAnswer = function (req, res) {
    var query = {
        sort: {
            like: 1
        }
    }
    Answer.find({}, null, query, function (err, answer) {
        if (err) throw err
        res.json(answer)
    })
}
exports.readAnAnswer = function (req, res) {
    Answer.findById(req.params.answerId, function (err, answer) {
        if (err) throw err
        res.json(answer)
    })
}
exports.createAnAnswer = function (req, res) {
    var newAnswer = new Answer(req.body)

    newAnswer.save(function (err, answer) {
        if (err) throw err
        res.json(answer)
    })
}
exports.updateAnAnswer = function (req, res) {
    console.log(req.params.answerId)
    var newAnswer = {}
    newAnswer = req.body
    console.log(newAnswer)
    Answer.findByIdAndUpdate(req.params.answerId, newAnswer, {
        new: true
    }, function (err, answer) {
        if (err) throw err
        console.log(answer)
        res.json(answer)
    })
}
exports.deleteAnAnswer = function (req, res) {
    console.log(req.params.answerId)
    User.findByIdAndRemove(req.params.answerId, function (err, answer) {
        if (err) throw err
        const response = {
            message: "Delete answer id: " + req.params.answerId + " successfully",
            id: answer._id
        }
        res.json(response)
    })
}
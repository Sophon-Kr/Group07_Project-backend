//questionRouts.js
'use strict'

module.exports = function (app) {
    var questionList = require('../controllers/questionListController')

    app.route('/questions')
        .get(questionList.listAllQuestion)
        .post(questionList.createAQuestion)

    app.route('/questions/:questionId')
        .get(questionList.readAQuestion)
        .delete(questionList.deleteAQuestion)
        .post(questionList.updateAQuestion)
}
//answerRouts.js
'use strict'

module.exports = function (app) {
    var answerList = require('../controllers/answerListController')

    app.route('/answers')
        .get(answerList.listAllAnswer)
        .post(answerList.createAnAnswer)

    app.route('/answers/:answerId')
        .get(answerList.readAnAnswer)
        .delete(answerList.deleteAnAnswer)
        .post(answerList.updateAnAnswer)
}
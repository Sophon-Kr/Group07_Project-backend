//usrCommentRouts.js
'use strict'

module.exports = function (app) {
    var usrCommentList = require('../controllers/usrCommentListController')

    app.route('/usrComments')
        .get(usrCommentList.listAllUsrComment)
        .post(usrCommentList.createAUsrComment)

    app.route('/usrComments/:usrCommentId')
        .get(usrCommentList.readAUsrComment)
        .delete(usrCommentList.deleteAUsrComment)
        .post(usrCommentList.updateAUsrComment)
}
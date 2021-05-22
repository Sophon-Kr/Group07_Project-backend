//postListRouts.js
'use strict'

module.exports = function (app) {
    var postList = require('../controllers/postListController')

    app.route('/posts')
        .get(postList.listAllPost)
        .post(postList.createAPost)

    app.route('/posts/:postId')
        .get(postList.readAPost)
        .delete(postList.deleteAPost)
        .post(postList.updateAPost)
}
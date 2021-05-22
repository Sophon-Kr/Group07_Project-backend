//articleRouts.js
'use strict'

module.exports = function (app) {
    var articleList = require('../controllers/articleListController')

    app.route('/articles')
        .get(articleList.listAllArticle)
        .post(articleList.createAnArticle)

    app.route('/articles/:articleId')
        .get(articleList.readAnArticle)
        .delete(articleList.deleteAnArticle)
        .post(articleList.updateAnArticle)
}
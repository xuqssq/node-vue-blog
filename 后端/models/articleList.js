var mongoose = require('mongoose')
var articleListSchema = new mongoose.Schema({
    "releaseTime": String, //发布时间
    "views": {
        type: Number,
        default: 0
    }, //文章阅读量
    "author": {
        type: String,
        default: 'XuQian'
    }, //作者
    "blogTitle": String, //标题
    "blogTag": String, //分类/标签
    "blogSummary": String, //文章摘要
    "htmlArticle": String, //html格式文章
    "markdownArticle": String, //markdown格式文章
})

module.exports = mongoose.model('ArticleList', articleListSchema);
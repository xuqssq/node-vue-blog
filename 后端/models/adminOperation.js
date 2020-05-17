var mongoose = require('mongoose')
var adminSchema = new mongoose.Schema({
    "adminId": Number,
    "adminEmail": String,
    "adminPassword": String,
    "adminUsername": String,
    "blogArticle": [{ //文章
        "blogId": { type: Number, default: 0 },
        "releaseTime": { type: String }, //发布时间
        "releaseStatus": { type: Boolean, default: true }, //发布状态
        "blogTitle": String, //标题
        "blogTag": String, //分类/标签
        "blogSummary": String, //文章摘要
        "htmlArticle": String, //html格式文章
        "markdownArticle": String, //markdown格式文章

    }]
})
module.exports = mongoose.model('Admin', adminSchema);
var mongoose = require('mongoose')
var resourcesSchema = new mongoose.Schema({
    "releaseTime": String, //发布时间
    "resourcesTitle": String,
    "resourcesSummary": String,
    "markdownResources": String,
    "htmlResources": String,
    "imageUrl": String,
    "fileUrl": String,
    "views": {
        type: Number,
        default: 0
    }, //文章阅读量
    "downloadVal": {
        type: Number,
        default: 0
    }, //下载量
})

module.exports = mongoose.model('Resources', resourcesSchema);
var mongoose = require('mongoose')
var msgListSchema = new mongoose.Schema({
    "msgName": String,
    "msgEmail": String,
    "msgTime": String, //评论时间
    "msgContent": String,
})

module.exports = mongoose.model('MsgList', msgListSchema);
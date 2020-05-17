var mongoose = require('mongoose')
var friendsLinkSchema = new mongoose.Schema({
    "friendsLogo": String, //友链 logo
    "friendsAddress": String, //地址
    "friendsName": String, //友链名称
    "friendsInt": String, //友链介绍
})

module.exports = mongoose.model('FriendsLink', friendsLinkSchema);
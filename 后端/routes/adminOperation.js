var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Admin = require('../models/adminOperation');
var moment = require('moment');
moment.locale('zh-cn');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('admin login');
});

mongoose.connect('mongodb://127.0.0.1:27017/myBlog', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("connected", function() {
    console.log("Mongoose connected sucess.")
});
mongoose.connection.on("error", function() {
    console.log("Mongoose connected fail.")
});
mongoose.connection.on("disconnected", function() {
    console.log("Mongoose connected disconnected.")
});




module.exports = router;
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var fs = require('fs');
var qiniu = require('qiniu') //七牛云
var nodemailer = require("nodemailer"); //邮箱提醒
var http = require('https');
var url = require("url");

var msgList = require('../models/msgList'); //留言 models
var friendsLink = require('../models/friendsLink'); //友链 models
var timeLine = require('../models/tiemLine'); //时光轴 model
var skill = require('../models/aboutSkill'); //关于技能 model
var articleList = require('../models/articleList'); //文章 model
var resources = require('../models/resources'); //资源 model
var adminUser = require('../models/adminUser'); //后台管理员 model

var moment = require('moment'); //时间格式化
moment.locale('zh-cn');

// 定义邮件服务器服，个人建议使用QQ邮箱，用Yeah(网易)邮箱配置出现各种问题
var transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',
    service: 'qq',
    secure: true,
    // 我们需要登录到网页邮箱中，然后配置SMTP和POP3服务器的密码
    auth: {
        user: 'xxxxx', //你的 QQ 邮箱
        pass: 'xxxxx' //你的 QQ 邮箱密码
    }
});
//发表留言
router.post('/msg', function(req, res, next) {
    var newMsg = new msgList({
        msgName: req.body.msgName,
        msgEmail: req.body.msgEmail,
        msgTime: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
        msgContent: req.body.msgContent,
    })
    var sendHtml = `<div style="color:#333">
        <div><span style="color:DeepPink">Name : </span>${newMsg.msgName}</div>
        <div><span style="color:DeepPink">Message time : </span>${newMsg.msgTime}</div>
        <div><span style="color:DeepPink">Mailbox : </span>${newMsg.msgEmail}</div>
        <div><span style="color:DeepPink">Message : </span>${newMsg.msgContent}</div>
    </div>`;
    var mailOptions = {
        // 发送邮件的地址
        from: 'xuqssq@qq.com', // login user must equal to this user
        // 接收邮件的地址
        to: 'xuqssq@163.com', // xrj0830@gmail.com
        // 邮件主题
        subject: 'Your blog has a new message',
        // 以HTML的格式显示，这样可以显示图片、链接、字体颜色等信息
        html: sendHtml
    };
    newMsg.save(function(err, data) {
        if (err) {
            res.json({
                status: 400,
                msg: err.message,
                result: ''
            })

        } else {
            transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                    // return console.log(error);
                    return;
                }
                // console.log('Message sent: ' + info.response);
            });
            res.json({
                status: 200,
                msg: '发表成功',
                result: ''
            })
        }
    })
})

//留言列表
router.get('/msgList', function(req, res, next) {

    let query = req.query;
    if (query.pageNo == '') {
        query.pageNo = 1
    } else {
        query.pageNo = query.pageNo
    }
    msgList.countDocuments({}, (error, count) => {
        if (error) {
            res.json({
                status: 400,
                msg: JSON.stringify(error)
            });
        } else {
            msgList.find().skip((query.pageNo - 1) * query.pageSize).limit(parseInt(query.pageSize) || 10).sort({ 'msgTime': -1 }).exec((err, doc) => {
                if (err) {
                    res.json({
                        status: 400,
                        msg: JSON.stringify(err)
                    });
                } else {
                    res.json({
                        status: 200,
                        result: doc,
                        total: count,
                        msg: 'OK'
                    });
                }
            })
        }
    })
})

//删除留言
router.post('/delMsg', (req, res, next) => {
    let msgId = req.body.msgId
    msgList.remove({ _id: msgId }, (err, doc) => {
        if (err) {
            res.json({
                status: 400,
                msg: err.message
            })
        } else {
            res.json({
                status: 200,
                msg: '删除成功！',
                result: ''
            })
        }
    })
})

//友链列表
router.get('/friendsList', (req, res, next) => {
    friendsLink.find({}, (err, doc) => {
        if (err) {
            res.json({
                status: 400,
                msg: err.message,
                result: ''
            })
        } else {
            res.json({
                status: 200,
                msg: 'ok',
                result: doc
            })
        }
    })
})

//编辑时返回要修改的数据
router.get('/editFriendOne', (req, res, next) => {
    friendsLink.findOne({ '_id': req.query.siteId }, (err, doc) => {
        if (err) {
            res.json({
                status: 400,
                msg: err.message,
                result: ''
            })
        } else {
            res.json({
                status: 200,
                msg: 'ok',
                result: doc
            })
        }
    })
})

//编辑修改技能
router.post('/editFriend', (req, res, next) => {
    friendsLink.updateOne({ '_id': req.body.siteId }, {
        friendsLogo: req.body.siteLogo,
        friendsAddress: req.body.siteAddress,
        friendsName: req.body.siteName,
        friendsInt: req.body.siteInf,
    }, (err, data) => {
        if (err) {
            res.json({
                status: 400,
                msg: err.message,
                result: ''
            })
        } else {
            res.json({
                status: 200,
                msg: '修改成功!',
                result: ''
            })
        }
    })

})

//友链删除
router.post('/delFriends', (req, res, next) => {
    let friendId = req.body.friendId
    friendsLink.remove({ _id: friendId }, (err, doc) => {
        if (err) {
            res.json({
                status: 400,
                msg: err.message
            })
        } else {
            res.json({
                status: 200,
                msg: '删除成功！',
                result: ''
            })
        }
    })
})

//添加友链
router.post('/addFriends', (req, res, next) => {
    var newFriendsLink = new friendsLink({
        friendsLogo: req.body.siteLogo,
        friendsAddress: req.body.siteAddress,
        friendsName: req.body.siteName,
        friendsInt: req.body.siteInf,
    })
    newFriendsLink.save((err, data) => {
        if (err) {
            res.json({
                status: 400,
                msg: err.message,
                result: ''
            })

        } else {
            res.json({
                status: 200,
                msg: '添加成功!',
                result: ''
            })
        }
    })
})

//添加时光轴
router.post('/addTimeLine', (req, res, next) => {
    var newAddTimeLine = new timeLine({
        TimeLineInt: req.body.TimeLineInt,
        TimeLineTime: moment(new Date()).format('MM/DD/YYYY HH:mm:ss'),
    })
    newAddTimeLine.save((err, data) => {
        if (err) {
            res.json({
                status: 400,
                msg: err.message,
                result: ''
            })

        } else {
            res.json({
                status: 200,
                msg: '添加成功!',
                result: ''
            })
        }
    })
})

//时光轴列表
router.get('/timeLineList', (req, res, next) => {
    timeLine.find({}, (err, doc) => {
        if (err) {
            res.json({
                status: 400,
                msg: err.message,
                result: ''
            })
        } else {
            res.json({
                status: 200,
                msg: 'ok',
                result: doc
            })
        }
    }).sort({ 'TimeLineTime': -1 })
})

//删除时光轴
router.post('/delTimeLine', (req, res, next) => {
    let timeLineId = req.body.timeLineId
    timeLine.remove({ _id: timeLineId }, (err, doc) => {
        if (err) {
            res.json({
                status: 400,
                msg: err.message
            })
        } else {
            res.json({
                status: 200,
                msg: '删除成功！',
                result: ''
            })
        }
    })
})

//添加技能
router.post('/addSkill', (req, res, next) => {
    var newSkill = new skill({
        skillName: req.body.skillName,
        skillMasteryLevel: req.body.skillMasteryLevel,
        skillColor: req.body.skillColor,
    })
    newSkill.save((err, data) => {
        if (err) {
            res.json({
                status: 400,
                msg: err.message,
                result: ''
            })

        } else {
            res.json({
                status: 200,
                msg: '添加成功!',
                result: ''
            })
        }
    })
})

//技能列表
router.get('/skillList', (req, res, next) => {
    skill.find({}, (err, doc) => {
        if (err) {
            res.json({
                status: 400,
                msg: err.message,
                result: ''
            })
        } else {
            res.json({
                status: 200,
                msg: 'ok',
                result: doc
            })
        }
    })
})

//编辑时返回要修改的数据
router.get('/editOne', (req, res, next) => {
    skill.findOne({ '_id': req.query.skillId }, (err, doc) => {
        if (err) {
            res.json({
                status: 400,
                msg: err.message,
                result: ''
            })
        } else {
            res.json({
                status: 200,
                msg: 'ok',
                result: doc
            })
        }
    })
})

//编辑修改技能
router.post('/editSkill', (req, res, next) => {
    skill.updateOne({ '_id': req.body.skillId }, {
        skillName: req.body.skillName,
        skillMasteryLevel: req.body.skillMasteryLevel,
        skillColor: req.body.skillColor,
    }, (err, data) => {
        if (err) {
            res.json({
                status: 400,
                msg: err.message,
                result: ''
            })
        } else {
            res.json({
                status: 200,
                msg: '修改成功!',
                result: ''
            })
        }
    })

})

//删除技能
router.post('/delSkill', (req, res, next) => {
    let skillId = req.body.skillId
    skill.remove({ _id: skillId }, (err, doc) => {
        if (err) {
            res.json({
                status: 400,
                msg: err.message
            })
        } else {
            res.json({
                status: 200,
                msg: '删除成功！',
                result: ''
            })
        }
    })
})

//添加文章
router.post('/addArticle', (req, res, next) => {
    var newArticle = new articleList({
        releaseTime: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
        blogTitle: req.body.blogTitle, //标题
        blogTag: req.body.blogTag, //分类/标签
        blogSummary: req.body.blogSummary, //文章摘要
        markdownArticle: req.body.markdownArticle, //markdown格式文章
        htmlArticle: req.body.htmlArticle, //html格式文章
    })
    newArticle.save((err, data) => {
        if (err) {
            res.json({
                status: 400,
                msg: err.message,
                result: ''
            })

        } else {
            res.json({
                status: 200,
                msg: '发布成功!',
                result: ''
            })
        }
    })
})

//文章列表
router.get('/articleList', function(req, res, next) {
    let query = req.query;
    if (query.pageNo == '') {
        query.pageNo = 1
    } else {
        query.pageNo = query.pageNo
    }
    articleList.countDocuments({}, (error, count) => {
        if (error) {
            res.json({
                status: 400,
                msg: JSON.stringify(error)
            });
        } else {
            articleList.find().skip((query.pageNo - 1) * query.pageSize).limit(parseInt(query.pageSize) || 10).sort({ 'releaseTime': -1 }).exec((err, doc) => {
                if (err) {
                    res.json({
                        status: 400,
                        msg: JSON.stringify(err)
                    });
                } else {
                    res.json({
                        status: 200,
                        result: doc,
                        total: count,
                        msg: 'OK'
                    });
                }
            })
        }
    })
})

//编辑时返回要修改的数据
router.get('/editArticleOne', (req, res, next) => {
    articleList.findOne({ '_id': req.query.articleId }, (err, doc) => {
        if (err) {
            res.json({
                status: 400,
                msg: err.message,
                result: ''
            })
        } else {
            res.json({
                status: 200,
                msg: 'ok',
                result: doc
            })
        }
    })
})

//编辑修改文章
router.post('/editArticle', (req, res, next) => {
    articleList.updateOne({ '_id': req.body.articleId }, {
        blogTitle: req.body.blogTitle, //标题
        blogTag: req.body.blogTag, //分类/标签
        blogSummary: req.body.blogSummary, //文章摘要
        markdownArticle: req.body.markdownArticle, //markdown格式文章
        htmlArticle: req.body.htmlArticle, //html格式文章
    }, (err, data) => {
        if (err) {
            res.json({
                status: 400,
                msg: err.message,
                result: ''
            })
        } else {
            res.json({
                status: 200,
                msg: '修改成功!',
                result: ''
            })
        }
    })

})

//删除文章
router.post('/delArticle', (req, res, next) => {
    let articleId = req.body.articleId
    articleList.remove({ _id: articleId }, (err, doc) => {
        if (err) {
            res.json({
                status: 400,
                msg: err.message
            })
        } else {
            res.json({
                status: 200,
                msg: '删除成功！',
                result: ''
            })
        }
    })
})

//文章详情页
router.get('/articleDetails/:id', (req, res, next) => {
    var id = req.params.id || ''
    articleList.findOne({ _id: id }, (err, doc) => {
        doc.views++;
        doc.save()
        if (err) {
            res.json({
                status: 400,
                msg: err.message,
                result: ''
            })
        } else {
            res.json({
                status: 200,
                msg: 'ok',
                result: doc
            })
        }
    })
})

//阅读量前10的文章
router.get('/hotArticleList', (req, res, next) => {
    articleList.find({}, (err, doc) => {
        if (err) {
            res.json({
                status: 400,
                msg: err.message,
                result: ''
            })
        } else {
            res.json({
                status: 200,
                msg: 'ok',
                result: doc
            })
        }
    }).limit(10).sort({ 'views': -1 })
})

// 分类查询文章
router.get('/classArticle', function(req, res, next) {
    let query = req.query;
    let blogTag = req.query.blogTag
    if (query.pageNo == '') {
        query.pageNo = 1
    } else {
        query.pageNo = query.pageNo
    }
    articleList.countDocuments({}, (error, count) => {
        if (error) {
            res.json({
                status: 400,
                msg: JSON.stringify(error)
            });
        } else {
            articleList.find({ blogTag: blogTag }).skip((query.pageNo - 1) * query.pageSize).limit(parseInt(query.pageSize) || 10).sort({ 'releaseTime': -1 }).exec((err, doc) => {
                if (err) {
                    res.json({
                        status: 400,
                        msg: JSON.stringify(err)
                    });
                } else {
                    res.json({
                        status: 200,
                        result: doc,
                        total: count,
                        msg: 'OK'
                    });
                }
            })
        }
    })
})

//图片上传到七牛云 换取 token
router.get('/token', (req, res, next) => {
    // 创建上传凭证
    const accessKey = 'XXXXX' //你的七牛云 accessKey
    const secretKey = 'XXXXX' // 你的七牛云 secretKey
    const mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
    const options = {
        scope: 'blog', //空间名称
        expires: 7200
    }
    const putPolicy = new qiniu.rs.PutPolicy(options)
    const uploadToken = putPolicy.uploadToken(mac)
    res.json({
        status: 200,
        msg: 'ok',
        result: uploadToken
    })
})

//文件上传到七牛云 换取 token
router.get('/tokenFile', (req, res, next) => {
    // 创建上传凭证
    const accessKey = 'XXXXX' //你的七牛云 accessKey
    const secretKey = 'XXXXX' // 你的七牛云 secretKey
    const mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
    const options = {
        scope: 'blogresources-xuqssq', //空间名称
        expires: 7200
    }
    const putPolicy = new qiniu.rs.PutPolicy(options)
    const uploadToken = putPolicy.uploadToken(mac)
    res.json({
        status: 200,
        msg: 'ok',
        result: uploadToken
    })
})

//添加资源
router.post('/addResources', (req, res, next) => {
    var newResources = new resources({
        releaseTime: moment(new Date()).format('MM/DD/YYYY HH:mm:ss'),
        resourcesTitle: req.body.resourcesTitle, //标题
        resourcesSummary: req.body.resourcesSummary, // 文章摘要
        markdownResources: req.body.markdownResources, //markdown格式文章
        htmlResources: req.body.htmlResources, //html格式文章
        imageUrl: req.body.imageUrl, // 封面图片
        fileUrl: req.body.fileUrl, // 资源地址
    })
    newResources.save((err, data) => {
        if (err) {
            res.json({
                status: 400,
                msg: err.message,
                result: ''
            })

        } else {
            res.json({
                status: 200,
                msg: '发布成功!',
                result: ''
            })
        }
    })
})

//资源列表
router.get('/resourcesList', function(req, res, next) {
    let query = req.query;
    if (query.pageNo == '') {
        query.pageNo = 1
    } else {
        query.pageNo = query.pageNo
    }
    resources.countDocuments({}, (error, count) => {
        if (error) {
            res.json({
                status: 400,
                msg: JSON.stringify(error)
            });
        } else {
            resources.find().skip((query.pageNo - 1) * query.pageSize).limit(parseInt(query.pageSize) || 10).sort({ 'releaseTime': -1 }).exec((err, doc) => {
                if (err) {
                    res.json({
                        status: 400,
                        msg: JSON.stringify(err)
                    });
                } else {
                    res.json({
                        status: 200,
                        result: doc,
                        total: count,
                        msg: 'OK'
                    });
                }
            })
        }
    })
})

//删除资源
router.post('/delResources', (req, res, next) => {
    let resourcesId = req.body.resourcesId
    resources.remove({ _id: resourcesId }, (err, doc) => {
        if (err) {
            res.json({
                status: 400,
                msg: err.message
            })
        } else {
            res.json({
                status: 200,
                msg: '删除成功！',
                result: ''
            })
        }
    })
})

//资源详情页
router.get('/resourcesDetails/:id', (req, res, next) => {
    var id = req.params.id || ''
    resources.findOne({ _id: id }, (err, doc) => {
        doc.views++;
        doc.save()
        if (err) {
            res.json({
                status: 400,
                msg: err.message,
                result: ''
            })
        } else {
            res.json({
                status: 200,
                msg: 'ok',
                result: doc
            })
        }
    })
})

//下载次数统计
router.get('/resourcesDonloadVal/:id', (req, res, next) => {
    var id = req.params.id || ''
    resources.findOne({ _id: id }, (err, doc) => {
        doc.downloadVal++;
        doc.save()
        if (err) {
            res.json({
                status: 400,
                msg: err.message,
                result: ''
            })
        } else {
            res.json({
                status: 200,
                msg: 'ok',
                result: doc.downloadVal
            })
        }
    })
})

//下载量前十的资源
router.get('/hotResources', (req, res, next) => {
    resources.find({}, (err, doc) => {
        if (err) {
            res.json({
                status: 400,
                msg: err.message,
                result: ''
            })
        } else {
            res.json({
                status: 200,
                msg: 'ok',
                result: doc
            })
        }
    }).limit(10).sort({ 'downloadVal': -1 })
})

//后台登录
router.post('/login', function(req, res, next) {
    var param = {
        adminEmail: req.body.adminInf.email,
        adminPassword: req.body.adminInf.password
    }
    adminUser.findOne(param, function(err, doc) {
        if (err) {
            res.json({
                status: 400,
                msg: err.message,
                result: '请输入正确中的邮箱或密码~'
            });
        } else {
            res.json({
                status: 200,
                msg: 'ok',
                result: doc.adminEmail
            })
        }
    })
})

//获取百度统计数据
router.get('/baidutj', (req1, res1, next1) => {
    var postData = JSON.stringify({
        "header": {
            "username": "xxxxx", //你的百度统计信息
            "password": "xxxxx",
            "token": "xxxxx",
            "account_type": 1
        },
        "body": {
            "site_id": "15035039",
            "start_date": "20200420",
            "end_date": moment(new Date()).format('YYYYMMDD'),
            "metrics": "pv_count,visit_count,visitor_count,new_visitor_count,new_visitor_ratio,ip_count,bounce_ratio,trans_ratio",
            // pv_count,visit_count,visitor_count,new_visitor_count,ip_count,avg_visit_pages
            "method": "visit/district/a"
        }
    })
    var options = {
        hostname: url.parse("https://api.baidu.com").hostname,
        path: '/json/tongji/v1/ReportService/getData',
        port: 443,
        method: "POST",
    }
    var req = http.request(options, function(res) {
        res.setEncoding("utf-8");
        res.on("data", function(chunk) {
            res1.json({
                status: 200,
                msg: 'ok',
                result: JSON.parse(chunk)
            })
        })
    })
    req.on("error", function(err) {
        console.log(err.message);
    })
    req.write(postData);
    req.end()
})
module.exports = router;
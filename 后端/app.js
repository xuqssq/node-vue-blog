var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var ejs = require('ejs');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var adminRouter = require('./routes/adminOperation');
var allRouter = require('./routes/api');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.__express)
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

// 拦截器
// app.use(function(req, res, next) {
//     if (req.cookies.adminEmail) {
//         next();
//     } else {
//         if (req.originalUrl == '/api/login' || req.originalUrl == '/api/msg' || req.originalUrl == '/api/msgList' || req.originalUrl == '/api/friendsList' || req.originalUrl == '/api/timeLineList' || req.originalUrl == '/api/skillList' || req.originalUrl == '/api/articleList' || req.originalUrl == '/api/articleDetails/:id' || req.originalUrl == '/api/hotArticleList' || req.originalUrl == '/api/resourcesList' || req.originalUrl == '/api/classArticle' || req.originalUrl == '/api/resourcesDetails/:id' || req.originalUrl == '/api/resourcesDonloadVal/:id' || req.originalUrl == '/api/hotResources'> -1) {
//             next();
//         } else {
//             res.json({
//                 status: '10001',
//                 msg: '当前管理员未登录',
//                 result: ''
//             })
//         }
//     }
// });
//实现跨域
app.all('*', function (req,  res,  next)  {    
    res.header("Access-Control-Allow-Origin", "*");    
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild , token , cookie');    
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");    
    res.header("X-Powered-By", ' 3.2.1')   
    res.header("Content-Type", "application/json;charset=utf-8");    
    next();  
});
app.use('/', indexRouter);
app.use('/adminOperation', adminRouter);
app.use('/api', allRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
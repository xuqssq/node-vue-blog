export default {
    msgList: [], //留言列表
    msgListCount: 0, //留言列表数量

    friendsList: [], //友链列表

    timeLineList: [], //时光轴列表

    skillList: [], //技能列表

    articleList: [], //全部文章列表
    articleListCount: 0, //全部文章列表数量
    //文章分类 nav
    articleClass: [{
            type: '前端',
            introduce: '关于前端编程的文章，比如Html、CSS、canvas、JavaScript、JQuery、Vue、微信小程序等。',
            url: '/article/frontend'
        },
        {
            type: '程序设计',
            introduce: '关于程序设计的文章，比如Leetcode、蓝桥杯、高校研究生复试编程等。',
            url: '/article/programming'
        },
        {
            type: '日常',
            introduce: '关于日常的文章，比如心情随笔、日常中的一些有趣好玩的事情记录等',
            url: '/article/daily'
        },
        {
            type: '阅读',
            introduce: '关于阅读的文章，比如《JavaScript DOM 编程艺术》、《JavaScript高级程序设计》、《深入浅出nodeJS》等。',
            url: '/article/reading'
        },
        {
            type: 'MongoDB',
            introduce: 'MongoDB数据库使用和配置的一些文章',
            url: '/article/mongodb'
        },
        {
            type: 'Node.js',
            introduce: '使用Node.js过程中遇到的一些问题记录',
            url: '/article/nodejs'
        },
        {
            type: 'Photoshop',
            introduce: '关于PS中切图、修图、抠图、图层处理等相关操作记录',
            url: '/article/photoshop'
        }
    ],
    hotArticle: [], //热门文章

    classArticle: [], //分类查询文章
    classArticleCount: 0, //该分类文章数量

    resourcesList: [], //资源列表
    resourceCount: 0, //资源数

    hotResourtes: [], //热门资源

    baidutjList: [], //百度统计数据
}
import {
    GET_MSG_LIST,
    GET_FRIENDS_LIST,
    GET_TIME_LINE_LIST,
    GET_SKILL_LIST,
    GET_ARTICLE_LIST,
    GET_HOT_ARTICLE,
    GET_CLASS_ARTICLE,
    GET_RESOURCES_LIST,
    GET_HOT_RESOURCES,
    GET_BAIDU_TJ
} from './mutation-types'
export default {
    //留言列表
    [GET_MSG_LIST](state, { msgList, msgListCount }) {
        state.msgList = msgList
        state.msgListCount = msgListCount
    },

    //友链列表
    [GET_FRIENDS_LIST](state, { friendsList }) {
        state.friendsList = friendsList
    },

    //时光轴列表
    [GET_TIME_LINE_LIST](state, { timeLineList }) {
        state.timeLineList = timeLineList
    },

    //掌握的技能列表
    [GET_SKILL_LIST](state, { skillList }) {
        state.skillList = skillList
    },

    //全部文章列表
    [GET_ARTICLE_LIST](state, { articleList, articleListCount }) {
        state.articleList = articleList
        state.articleListCount = articleListCount
    },

    //热门文章列表
    [GET_HOT_ARTICLE](state, { hotArticle }) {
        state.hotArticle = hotArticle
    },

    //分类查询文章列表
    [GET_CLASS_ARTICLE](state, { classArticle, classArticleCount }) {
        state.classArticle = classArticle
        state.classArticleCount = classArticleCount
    },

    //全部资源
    [GET_RESOURCES_LIST](state, { resourcesList, resourceCount }) {
        state.resourcesList = resourcesList
        state.resourceCount = resourceCount
    },

    //热门资源列表
    [GET_HOT_RESOURCES](state, { hotResourtes }) {
        state.hotResourtes = hotResourtes
    },

    //百度统计数据
    [GET_BAIDU_TJ](state, { baidutjList }) {
        state.baidutjList = baidutjList
    },

}
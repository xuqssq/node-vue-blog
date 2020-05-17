import {
    getMsgList,
    getFriendsList,
    getTimeLineList,
    getSkillList,
    getArticleList,
    getHotArticle,
    getClassArticle,
    getResourcesList,
    getHotResources,
    getBaiDutj
} from '../api/index'
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
    //获取留言列表
    async reqMsgList({ commit }, value) {
        const result = await getMsgList(value.pageNo, value.pageSize);
        commit(GET_MSG_LIST, { msgList: result.result, msgListCount: result.total })
    },

    //友链列表
    async reqFriendsList({ commit }) {
        const result = await getFriendsList();
        commit(GET_FRIENDS_LIST, { friendsList: result.result })
    },

    //时光轴列表
    async reqTimeLineList({ commit }) {
        const result = await getTimeLineList();
        commit(GET_TIME_LINE_LIST, { timeLineList: result.result })
    },

    //技能列表
    async reqSkillList({ commit }) {
        const result = await getSkillList();
        commit(GET_SKILL_LIST, { skillList: result.result })
    },

    //全部文章列表
    async reqArticleList({ commit }, value) {
        const result = await getArticleList(value.pageNo, value.pageSize);
        commit(GET_ARTICLE_LIST, { articleList: result.result, articleListCount: result.total })
    },

    //热门文章列表
    async reqHotArticle({ commit }) {
        const result = await getHotArticle();
        commit(GET_HOT_ARTICLE, { hotArticle: result.result })
    },

    //分类查询
    async reqClassArticle({ commit }, value) {
        const result = await getClassArticle(value.pageNo, value.pageSize, value.blogTag);
        commit(GET_CLASS_ARTICLE, { classArticle: result.result, ClassarticleCount: result.total })
    },

    //全部资源列表
    async reqResourcesList({ commit }, value) {
        const result = await getResourcesList(value.pageNo, value.pageSize);
        commit(GET_RESOURCES_LIST, { resourcesList: result.result, resourceCount: result.total })
    },

    //热门资源列表
    async reqHotResourtes({ commit }) {
        const result = await getHotResources();
        commit(GET_HOT_RESOURCES, { hotResourtes: result.result })
    },

    //百度统计数据
    async reqBaiDutj({ commit }) {
        const result = await getBaiDutj();
        commit(GET_BAIDU_TJ, { baidutjList: result.result.body })
    },
}
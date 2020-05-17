import ajax from './ajax'

//基础路径
const BASE_URL = 'https://localhost:4000';

//登录
export const doLogin = (adminInf) => ajax(BASE_URL + '/api/login', { adminInf }, 'POST');

//发表留言
export const postMsg = (msgName, msgEmail, msgContent) => ajax(BASE_URL + '/api/msg', { msgName, msgEmail, msgContent }, 'POST')

//留言列表
export const getMsgList = (pageNo, pageSize) => ajax(BASE_URL + '/api/msgList', { pageNo, pageSize })

//删除留言
export const delMsg = (msgId) => ajax(BASE_URL + '/api/delMsg', { msgId }, 'POST')

//友链列表
export const getFriendsList = () => ajax(BASE_URL + '/api/friendsList')

//查询要编辑的友链
export const getEditFriend = (siteId) => ajax(BASE_URL + '/api/editFriendOne', { siteId })

//保存编辑后的友链
export const saveEditFriend = (siteId, siteName, siteAddress, siteLogo, siteInf) => ajax(BASE_URL + '/api/editFriend', { siteId, siteName, siteAddress, siteLogo, siteInf }, 'POST')

//删除友链
export const delFriends = (friendId) => ajax(BASE_URL + '/api/delFriends', { friendId }, 'POST')

//添加友链
export const addFriends = (siteName, siteAddress, siteLogo, siteInf) => ajax(BASE_URL + '/api/addFriends', { siteName, siteAddress, siteLogo, siteInf }, 'POST')

//添加时光轴
export const addTimeLine = (TimeLineInt) => ajax(BASE_URL + '/api/addTimeLine', { TimeLineInt }, 'POST')

//时光轴列表
export const getTimeLineList = () => ajax(BASE_URL + '/api/timeLineList')

//删除时光轴
export const delTimeLine = (timeLineId) => ajax(BASE_URL + '/api/delTimeLine', { timeLineId }, 'POST')

//添加技能
export const addSkill = (skillName, skillMasteryLevel, skillColor) => ajax(BASE_URL + '/api/addSkill', { skillName, skillMasteryLevel, skillColor }, 'POST')

//技能列表
export const getSkillList = () => ajax(BASE_URL + '/api/SkillList')

//查询要编辑的技能
export const getEditSkill = (skillId) => ajax(BASE_URL + '/api/editOne', { skillId })

//保存编辑后的技能
export const saveEditSkill = (skillId, skillName, skillMasteryLevel, skillColor) => ajax(BASE_URL + '/api/editSkill', { skillId, skillName, skillMasteryLevel, skillColor }, 'POST')

//删除技能
export const delSkill = (skillId) => ajax(BASE_URL + '/api/delSkill', { skillId }, 'POST')

//发表文章
export const addArticle = (blogTitle, blogTag, blogSummary, markdownArticle, htmlArticle) => ajax(BASE_URL + '/api/addArticle', { blogTitle, blogTag, blogSummary, markdownArticle, htmlArticle }, 'POST')

//全部文章列表
export const getArticleList = (pageNo, pageSize) => ajax(BASE_URL + '/api/articleList', { pageNo, pageSize })

//查询要编辑的文章
export const getEditArticle = (articleId) => ajax(BASE_URL + '/api/editArticleOne', { articleId })

//保存编辑后的文章
export const saveEditArticle = (articleId, blogTitle, blogTag, blogSummary, markdownArticle, htmlArticle) => ajax(BASE_URL + '/api/editArticle', { articleId, blogTitle, blogTag, blogSummary, markdownArticle, htmlArticle }, 'POST')

//删除文章
export const delArticle = (articleId) => ajax(BASE_URL + '/api/delArticle', { articleId }, 'POST')

//文章详情页
export const getArticleDetails = (id) => ajax(BASE_URL + '/api/articleDetails/' + id)

//热门文章
export const getHotArticle = () => ajax(BASE_URL + '/api/hotArticleList')

//分类文章查询
export const getClassArticle = (pageNo, pageSize, blogTag) => ajax(BASE_URL + '/api/classArticle', { pageNo, pageSize, blogTag })

//发布资源
export const addResources = (resourcesTitle, resourcesSummary, markdownResources, htmlResources, imageUrl, fileUrl) => ajax(BASE_URL + '/api/addResources', { resourcesTitle, resourcesSummary, markdownResources, htmlResources, imageUrl, fileUrl }, 'POST')

//全部资源列表
export const getResourcesList = (pageNo, pageSize) => ajax(BASE_URL + '/api/resourcesList', { pageNo, pageSize })

//删除资源
export const delResources = (resourcesId) => ajax(BASE_URL + '/api/delResources', { resourcesId }, 'POST')

//资源详情页
export const getResourcesDetails = (id) => ajax(BASE_URL + '/api/resourcesDetails/' + id)

//下载次数统计
export const getresourcesDonloadVal = (id) => ajax(BASE_URL + '/api/resourcesDonloadVal/' + id)

//热门资源
export const getHotResources = () => ajax(BASE_URL + '/api/hotResources')

//百度统计 数据
export const getBaiDutj = () => ajax(BASE_URL + '/api/baidutj')
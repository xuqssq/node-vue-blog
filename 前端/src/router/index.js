import Vue from 'vue'
import Router from 'vue-router'
//前台
import Home from '@/pages/Home/Home' //首页
import Article from '@/pages/Article/Article' //文章列表
import ArticleDetails from '@/pages/Article/Children/ArticleDetails' //文章详情页
import FrontEnd from '@/pages/Article/ClassNav/FrontEnd' //前端分类
import Programming from '@/pages/Article/ClassNav/Programming' //程序设计分类
import Daily from '@/pages/Article/ClassNav/Daily' //日常分类
import Reading from '@/pages/Article/ClassNav/Reading' //阅读分类
import MongoDB from '@/pages/Article/ClassNav/MongoDB' //MongoDB分类
import NodeJs from '@/pages/Article/ClassNav/NodeJs' //Node分类
import Photoshop from '@/pages/Article/ClassNav/Photoshop' //Photoshop分类
import Resources from '@/pages/Resources/Resources' //资源列表
import ResourcesDetails from '@/pages/Resources/Children/ResourcesDetails' //文章详情页
import TimeAxis from '@/pages/TimeAxis/TimeAxis' //时光轴
import About from '@/pages/About/About' //关于
import FriendsLink from '@/pages/FriendsLink/FriendsLink' //友链
import Message from '@/pages/Message/Message' //留言

//后台
import Login from '@/pages/Admin/Login/Login' //登录
import Index from '@/pages/Admin/Index'
import Dashboard from '@/pages/Admin/Dashboard/Dashboard' //首页仪表板
import ArticleManagement from '@/pages/admin/ArticleManagement/ArticleManagement' //文章管理
import PostArticle from '@/pages/admin/PostArticle/PostArticle' //发布文章
import ResourcesManagement from '@/pages/admin/ResourcesManagement/ResourcesManagement' //资源页管理
import AddResources from '@/pages/admin/AddResources/AddResources' //添加资源
import TimeLine from '@/pages/admin/TimeLine/TimeLine' //时光轴管理
import AddTimeLine from '@/pages/admin/TimeLine/Children/AddTimeLine' //添加时光轴
import TimeLineList from '@/pages/admin/TimeLine/Children/TimeLineList' //时光轴列表
import AboutSkill from '@/pages/admin/AboutSkill/Skill' //技能管理
import AddSkill from '@/pages/admin/AboutSkill/Children/AddSkill' //添加技能
import SkillList from '@/pages/admin/AboutSkill/Children/SkillList' //技能列表
import FriendsManagements from '@/pages/admin/FriendsManagements/FriendsManagements' //友链管理
import AddFriends from '@/pages/admin/FriendsManagements/Children/AddFriends' //添加友链
import FriendsList from '@/pages/admin/FriendsManagements/Children/FriendsList' //友链列表
import MsgManagement from '@/pages/admin/MsgManagement/MsgManagement' //留言管理

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/home',
        name: 'Home',
        component: Home,
        children: []
    }, {
        path: '/article',
        name: 'Article',
        component: Article,
        children: []
    }, {
        path: '/article/details/:id',
        name: 'ArticleDetails',
        component: ArticleDetails,
        props: true,
        children: []
    }, {
        path: '/article/frontend',
        name: 'FrontEnd',
        component: FrontEnd,
        children: []
    }, {
        path: '/article/programming',
        name: 'Programming',
        component: Programming,
        children: []
    }, {
        path: '/article/daily',
        name: 'Daily',
        component: Daily,
        children: []
    }, {
        path: '/article/reading',
        name: 'Reading',
        component: Reading,
        children: []
    }, {
        path: '/article/mongodb',
        name: 'MongoDB',
        component: MongoDB,
        children: []
    }, {
        path: '/article/nodejs',
        name: 'NodeJs',
        component: NodeJs,
        children: []
    }, {
        path: '/article/photoshop',
        name: 'Photoshop',
        component: Photoshop,
        children: []
    }, {
        path: '/resources',
        name: 'Resources',
        component: Resources,
        children: []
    }, {
        path: '/resources/details/:id',
        name: 'ResourcesDetails',
        component: ResourcesDetails,
        props: true,
        children: []
    }, {
        path: '/timeaxis',
        name: 'TimeAxis',
        component: TimeAxis,
        children: []
    }, {
        path: '/about',
        name: 'About',
        component: About,
        children: []
    }, {
        path: '/friendslink',
        name: 'FriendsLink',
        component: FriendsLink,
        children: []
    }, {
        path: '/message',
        name: 'Message',
        component: Message,
        children: []
    }, {
        path: '/',
        redirect: '/home'
    }, {
        path: '/admin/login',
        name: 'Login',
        component: Login,
    }, {
        path: '/admin',
        component: Index,
        children: [{
            path: 'dashboard',
            name: 'Dashboard',
            component: Dashboard,
        }, {
            path: 'articlemanagement',
            name: 'ArticleManagement',
            component: ArticleManagement,
        }, {
            path: 'postarticle',
            name: 'PostArticle',
            component: PostArticle,
        }, {
            path: 'resourcesmanagement',
            name: 'ResourcesManagement',
            component: ResourcesManagement,
        }, {
            path: 'addresources',
            name: 'AddResources',
            component: AddResources,
        }, {
            path: 'timeline',
            name: 'TimeLine',
            component: TimeLine,
            children: [
                { path: 'addtimeline', name: 'AddTimeLine', component: AddTimeLine },
                { path: 'timelinelist', name: 'TimeLineList', component: TimeLineList },
            ]
        }, {
            path: 'aboutskill',
            name: 'AboutSkill',
            component: AboutSkill,
            children: [
                { path: 'addskill', name: 'AddSkill', component: AddSkill },
                { path: 'skilllist', name: 'SkillList', component: SkillList },
            ]
        }, {
            path: 'friendsmanagements',
            name: 'FriendsManagements',
            component: FriendsManagements,
            children: [
                { path: 'addfriends', name: 'AddFriends', component: AddFriends },
                { path: 'friendslist', name: 'FriendsList', component: FriendsList },
            ]
        }, {
            path: 'msgmanagement',
            name: 'MsgManagement',
            component: MsgManagement,
        }, {
            path: '/admin',
            redirect: '/admin/dashboard'
        }, ]
    }, ]
})
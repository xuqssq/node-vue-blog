// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index' //vuex
import 'font-awesome/css/font-awesome.min.css' //font-awesome
import "./router/premit" //路由守卫

import mavonEditor from 'mavon-editor' //markdown 编辑器
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)


import hljs from "highlight.js"; //代码块高亮插件
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/atelier-cave-dark.css';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

Vue.directive('highlight', function(el) {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block) => {
        hljs.highlightBlock(block)
    })
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
router.afterEach((to, from, next) => { //解决路由跳转后不在顶部问题
    window.scrollTo(0, 0);
})

// 加入百度统计
router.beforeEach((to, from, next) => {
    if (to.path) {
        if (window._hmt) {
            window._hmt.push(['_trackPageview', '/#' + to.fullPath])
        }
    }
    next()
})
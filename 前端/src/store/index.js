import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'


//使用 vuex
Vue.use(Vuex);

// 对外输出 vuex 的 store 对象
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
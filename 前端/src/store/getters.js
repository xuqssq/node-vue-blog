export default {
    paging(state) { //计算总页数
        return state.pageNum = Math.ceil(state.test.length / state.pageSize) || 1
    },
}
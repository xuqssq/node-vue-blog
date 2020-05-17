<!-- 文章分类导航组件 -->
<template>
    <div>
        <h3 class="right-2-title">
            <i class="fa fa-star" aria-hidden="true"></i>
            <span>文章分类</span>
        </h3>
        <ul class="sort-list">
            <li class="sort-item" v-for="(item,index) in articleClass" :key="index">
                <router-link :to="item.url" class="sort-link">
                    <div class="sort-id">{{index+1}}</div>
                    <div>
                        <p class="sort-title sort-inf">{{item.type}}</p>
                        <p class="sort-inf">{{item.introduce}}</p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data () {
        return {

        };
    },

    components: {},
    computed:{
        ...mapState(['articleClass']),
    },
    methods: {}
}

</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
    .right-2-title
        font-weight normal
        font-size 18px
        border-bottom 1px solid #eee
        padding 15px 16px
        i 
            color #ffaa00
            font-size 16px
    .sort-list
        padding-bottom 10px
        .sort-item
            width 268px
            .sort-link
                display flex
                margin-top 15px
                &:hover
                    .sort-title
                        color #7400b3
                .sort-id
                    width 45px
                    height 45px
                    border-radius 50%
                    text-align center
                    line-height 45px
                    color #8d7bf2
                    background-color #efeffd
                .hot-id
                    width 22px
                    height 21px
                    font-size 16px
                    color #8d7bf2
                    font-weight bold
                    font-style italic
                    margin 5px 4px
                .sort-title
                    margin-bottom 5px
                    color #000
                .sort-inf
                    overflow hidden
                    text-overflow ellipsis
                    white-space:nowrap
                    width 212px
                    margin-left 10px
                .browse-num
                    margin-left 10px
                    font-size 13px

</style>
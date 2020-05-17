<!-- 右侧顶部 -->
<template>
    <div>
        <header class="box">
            <router-link to="/home" title="去前台">Home</router-link>
            <span class="admin-user">欢迎您，管理员</span>
        </header>
    </div>
</template>

<script>
export default {
    data () {
        return {

        };
    },

    components: {},

    methods: {}
}

</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
    .box
        position fixed
        top 0
        left 250px
        padding 20px 30px
        border-bottom 1px solid #dee2e6
        width 84%
        display flex 
        justify-content space-between
        background-color #ffffff
        box-shadow 0 10px 28px 0 rgba(182, 193, 215, 0.1)
        z-index 1501
        a:hover
            color #333
        .admin-user
           color  #555
</style>
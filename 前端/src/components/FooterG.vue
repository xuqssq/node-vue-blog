<!-- 全局底部 -->
<template>
   <div class="box">
       <span>Copyright © 2020 XuQian All Rights Reserved V.1.0.0 备案号: <a href="http://www.beian.miit.gov.cn/" rel="external nofollow">粤ICP备19050326号-2</a></span>
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
        width 100%
        height 50px
        background-color #30373C
        color #d9d9d9
        text-align: center
        @media screen and (max-device-width:960px){
               display none
        }
        span 
            font-size 11px
            line-height 50px
            a
                color #d9d9d9
                &:hover
                    color #fff
</style>
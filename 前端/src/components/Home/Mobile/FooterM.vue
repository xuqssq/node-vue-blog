<!-- 全局底部 -->
<template>
    <footer class="box">
        <span>备案号: <a href="http://www.beian.miit.gov.cn/">粤ICP备19050326号-2</a></span>
        <p>Copyright © 2020 XuQian All Rights Reserved V.1.0.0</p>
    </footer>
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
            display none
            @media screen and (max-device-width:960px){
                display flex
                align-items center
                flex-direction column
                justify-content center
            }
            span,p 
                font-size 11px
                a
                    color #d9d9d9
                    text-decoration underline
                
</style>
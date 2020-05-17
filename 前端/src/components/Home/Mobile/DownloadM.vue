<!-- 移动端首页内容 -->
<template>
   <div class="box">
       <ul class="content-m-article">
           <li class="content-m-article-list  animated fadeInUp">
               <a href="#">
                   <img src="@/../static/down.png" alt="">
                   <div>
                       <p>博客后台管理系统前端模块</p>
                       <p>基于vue-cli+element-ui+mock.js搭建的博客后台管理系统前端部分</p>
                   </div>
               </a>
               <a href="#" class="download-now">点我下载</a>
           </li>
           <li class="content-m-article-list  animated fadeInUp">
               <a href="#">
                   <img src="@/../static/down.png" alt="">
                   <div>
                       <p>博客后台管理系统前端模块</p>
                       <p>基于vue-cli+element-ui+mock.js搭建的博客后台管理系统前端部分</p>
                   </div>
               </a>
               <a href="#" class="download-now">点我下载</a>
           </li>
           <li class="content-m-article-list  animated fadeInUp">
               <a href="#">
                   <img src="@/../static/down.png" alt="">
                   <div>
                       <p>博客后台管理系统前端模块</p>
                       <p>基于vue-cli+element-ui+mock.js搭建的博客后台管理系统前端部分</p>
                   </div>
               </a>
               <a href="#" class="download-now">点我下载</a>
           </li>
           <li class="content-m-article-list  animated fadeInUp">
               <a href="#">
                   <img src="@/../static/down.png" alt="">
                   <div>
                       <p>博客后台管理系统前端模块</p>
                       <p>基于vue-cli+element-ui+mock.js搭建的博客后台管理系统前端部分</p>
                   </div>
               </a>
               <a href="#" class="download-now">点我下载</a>
           </li>
       </ul>
       <div class="more">
           <router-link  :to="{name:'Resources'}">查看资源</router-link>
       </div>
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
        display none
        @media screen and (max-device-width:960px){
            display block
        }
        .content-m-article
            display flex
            width 100%
            flex-wrap wrap
            justify-content center
            .content-m-article-list
                width 45%
                height 300px
                background-color #ffffff
                border-radius 10px
                margin  5px 5px
                padding 0px 10px
                box-sizing border-box
                a
                    height 100%
                    display flex
                    align-items center
                    justify-content center
                    flex-direction column
                    color #999
                    img 
                        width 60px
                        height 60px
                        margin-top -40px
                    div
                        font-size 12px
                        margin-top 15px
                        width 140px
                        :nth-of-type(1){
                            color #333
                            font-size 14px
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            padding 0px 5px
                        }
                        :nth-of-type(2){
                            margin-top 5px
                            line-height 18px
                        }
                .download-now
                    color #6a70ec
                    margin-top -210px
        .more
            width 120px
            border-radius 20px
            background-color #6a70ec
            text-align center
            line-height 40px
            margin 20px auto
            a
                color #fff
                line-height 40px
</style>
<!-- 下载列表 -->
<template>
   <div class="box">
       <ul class="download-box">
           <li class="download-list animated fadeInUp">
               <a href="#">
                   <img src="@/../static/down.png" alt="">
                   <div class="download-inf">
                       <p class="download-inf-title">博客后台管理系统前端模块</p>
                       <p class="download-inf-content">基于vue-cli+element-ui+mock.js搭建的博客后台管理系统前端部分</p>
                   </div>
               </a>
               <p class="download-btn"><a href="#">点我下载</a></p>
           </li>

           <li class="download-list animated fadeInUp">
               <a href="#">
                   <img src="@/../static/down.png" alt="">
                   <div class="download-inf">
                       <p class="download-inf-title">博客后台管理系统前端模块</p>
                       <p class="download-inf-content">基于vue-cli+element-ui+mock.js搭建的博客后台管理系统前端部分</p>
                   </div>
               </a>
               <p class="download-btn"><a href="#">点我下载</a></p>
           </li>

           <li class="download-list animated fadeInUp">
               <a href="#">
                   <img src="@/../static/down.png" alt="">
                   <div class="download-inf">
                       <p class="download-inf-title">博客后台管理系统前端模块</p>
                       <p class="download-inf-content">基于vue-cli+element-ui+mock.js搭建的博客后台管理系统前端部分</p>
                   </div>
               </a>
               <p class="download-btn"><a href="#">点我下载</a></p>
           </li>
       </ul>

       <div class="read-article">
           <router-link :to="{name:'Resources'}">查看资源</router-link>
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
        .download-box
            display flex;
            width 892px
            justify-content space-evenly
            flex-wrap wrap
            margin 60px auto
            @media screen and (max-device-width:960px){
                display none
            }
            .download-list
                width 270px
                height 300px
                background-color #fff
                border-radius 10px
                margin-bottom 30px
                box-show:0 10px 28px 0 rgba(182,193,215,0.1)
                &:hover
                    box-shadow 0 10px 28px 0 rgba(182, 193, 215, 0.3)
                a
                    display flex
                    flex-direction column
                    align-items center
                    padding-top 50px
                    img 
                        width 40px
                        height 40px
                    .download-inf
                        font-size 13px
                        margin-top 10px
                        :nth-of-type(1)
                            font-size 16px
                            color #333333
                            margin 10px 0px
                            text-align center
                        :nth-of-type(2)
                           line-height 23px
                        color #999
                        width 210px
                .download-btn
                    a
                        color #6A70EC
                        font-size 13px
        .read-article
            text-align center
            margin -60px auto
            margin-bottom 60px
            background-color :#6a70ec
            height 40px
            width 120px
            border-radius 20px
            line-height 40px
            @media screen and (max-device-width:960px){
                display none
            } 
            a
                display block
                color #fff           
</style>
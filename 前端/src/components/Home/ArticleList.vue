<!-- 首页文章列表 -->
<template>
   <div class="box">
       <ul class="article-box">
           <li class="article-list animated fadeInUp">
               <router-link :to="{name:'FrontEnd'}">
                   <img src="@/../static/uploadImage-1.png" alt="">
                   <div class="list-box">
                       <p class="list-title">前端</p>
                       <p class="list-content">关于前端编程的文章，比如Html、CSS、canvas、JavaScript、JQuery、Vue、微信小程序等。</p>
                   </div>
               </router-link>
            </li>

             <li class="article-list animated fadeInUp">
               <router-link :to="{name:'Programming'}">
                   <img src="@/../static/uploadImage-2.jpg" alt="">
                   <div class="list-box">
                       <p class="list-title">程序设计</p>
                       <p class="list-content">关于程序设计的文章，比如Leetcode、蓝桥杯、高校研究生复试编程等。</p>
                   </div>
               </router-link>
            </li>
            <li class="article-list animated fadeInUp">
               <router-link :to="{name:'Daily'}">
                   <img src="@/../static/uploadImage-3.png" alt="">
                   <div class="list-box">
                       <p class="list-title">日常</p>
                       <p class="list-content">关于日常的文章，比如心情随笔、日常中的一些有趣好玩的事情记录等</p>
                   </div>
               </router-link>
            </li>
            <li class="article-list animated fadeInUp">
               <router-link :to="{name:'Reading'}">
                   <img src="@/../static/uploadImage-4.png" alt="">
                   <div class="list-box">
                       <p class="list-title">阅读</p>
                       <p class="list-content">关于阅读的文章，比如《JavaScript DOM 编程艺术》、《JavaScript高级程序设计》等。</p>
                   </div>
               </router-link>
            </li>
       </ul>

       <div class="read-article">
           <router-link :to="{name:'Article'}">阅读文章</router-link>
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
        .article-box
            width 892px
            margin 0 auto
            margin-top 60px
            display flex
            justify-content space-around
            flex-wrap wrap
            @media screen and (max-device-width:960px){
                display none
            }
            .article-list
                width 426px
                height 200px
                border-radius 10px
                background #FFF
                margin-bottom 30px
                a
                    height 100%
                    width 100%
                    display flex
                    align-items center
                    justify-content space-evenly
                    &:hover
                        box-shadow 0 10px 28px 0 rgba(182, 193, 215, 0.3)
                    img 
                        width 80px
                        height 70px
                    .list-box
                        width 246px
                        .list-title
                            color #0000ee
                            font-size 16px
                        .list-content
                            color #999999
                            font-size 13px
                            margin-top 10px
                            line-height 25px 
        .read-article
            text-align center
            margin 0 auto
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
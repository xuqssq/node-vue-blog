<!-- 移动端首页内容 -->
<template>
   <div class="box">
       <ul class="content-m-article">
           <li class="content-m-article-list  animated fadeInUp">
               <router-link :to="{name:'FrontEnd'}">
                   <img src="@/../static/uploadImage-1.png" alt="">
                   <div>
                       <p>前端</p>
                       <p>关于前端编程的文章，比如Html、CSS、canvas、JavaScript、JQuery、Vue、微信小程序等。</p>
                   </div>
               </router-link>
           </li>
           <li class="content-m-article-list  animated fadeInUp">
               <router-link :to="{name:'Programming'}">
                   <img src="@/../static/uploadImage-2.jpg" alt="">
                   <div>
                       <p>程序设计</p>
                       <p>关于程序设计的文章，比如Leetcode、蓝桥杯、高校研究生复试编程等。</p>
                   </div>
               </router-link>
           </li>
           <li class="content-m-article-list  animated fadeInUp">
               <router-link :to="{name:'Daily'}">
                   <img src="@/../static/uploadImage-3.png" alt="">
                   <div>
                       <p>日常</p>
                       <p>关于日常的文章，比如心情随笔、日常中的一些有趣好玩的事情记录等</p>
                   </div>
               </router-link>
           </li>
           <li class="content-m-article-list  animated fadeInUp">
               <router-link :to="{name:'Reading'}">
                   <img src="@/../static/uploadImage-4.png" alt="">
                   <div>
                       <p>阅读</p>
                       <p>关于阅读的文章，比如《JavaScript DOM 编程艺术》、《JavaScript高级程序设计》等。</p>
                   </div>
               </router-link>
           </li>
       </ul>
       <div class="more">
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
        display none
        @media screen and (max-device-width:960px){
            display block
        }
        .content-m-article-list
            width 90%
            height 100px
            background-color #ffffff
            border-radius 10px
            margin  10px auto
            padding 0px 10px
            box-sizing border-box
            a
                height 100%
                display flex
                align-items center
                justify-content space-between
                color #999
                img 
                    width 70px
                    height 60px
                div
                    font-size 12px
                    width 230px
                    :nth-of-type(1){
                        color #0000ee
                    }
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
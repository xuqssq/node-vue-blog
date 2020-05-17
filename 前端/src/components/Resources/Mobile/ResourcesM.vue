<!-- 手机端文章列表页面 -->
<template>
   <div class="box">
      <header class="article-m-header" :style="headerBackground">
         <nav-bar-m></nav-bar-m>
         <div class="header-text">
            <h1 class="animated fadeInDown">XXXXXX</h1>
            <p class="animated fadeInUp">XXXXXXXXXX</p>
         </div>
      </header>
         <ul class="article-m-list">
            <li class="article-m-item animated fadeInUp" v-for="(item,index) in test">
               <a href="#" class="article-m-moreLink">
                  <h1 class="article-m-title">基于vue-cli+element-ui+mock.js搭建的博客后台管理系统</h1>
                  <div class="ico-box">
                     <div>
                        <i class="fa fa-calendar-o" style="color:#55aaff;font-size:15px"></i>
                        <span>2020-4-16</span>
                     </div>
                     <div>
                        <i class="fa fa-download" style="color:#55aaff;font-size:14px"></i>
                        <span>18923</span>
                     </div>
                  </div>
                  <p class="article-m-inf">文章概要~文章概要~文章概要~文章概要~文章概要~文章概要~文章概要~文章概要~文章概要~文章概要~文章概要~文章概要~文章概要~文章概要~</p>
               </a>
            </li>
         </ul>
         <paging-device></paging-device>
   </div>
</template>

<script>
import navBarM from './../../Home/Mobile/navBarM'
import PagingDevice from '@/components/PagingDevice'
export default {
    data () {
       return {
          headerBackground:{
            backgroundImage: "url(" + require("./../../../../static/bg1.jpg") + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition:"center center",
          },
          test:[1,2,3,4,5,6,7,8,9,10]
       };
    },

    components: {
       navBarM,
       PagingDevice
    },
    methods: {}
}

</script>
<style scoped lang='stylus' ref="reference" ref="stylesheet/stylus">
   .box
      display none 
      @media screen and (max-device-width:960px){
         display block
      }
      .article-m-header
         color #fff
         width 100%
         height 150px
         .header-text
            height 100%
            display flex
            flex-direction column
            align-items center
            justify-content center
            line-height 40px
            background: linear-gradient(135deg,rgba(94,136,255,.8) 0,rgba(94,18,214,.8) 100%);
            h1 
               font-weight normal
               font-size 32px
      .article-m-list
         margin-bottom -30px
         .article-m-item
            margin 30px 20px
            background-color #fff
            border-radius 5px
            padding 15px 15px
            box-shadow 0 10px 28px 0 rgba(182, 193, 215, 0.4)
            .article-m-moreLink
                color #555
               .article-m-title
                  font-weight normal
                  font-size 20px
                  text-align center
               .ico-box
                  display flex
                  font-size 12px
                  justify-content space-between
                  padding 10px 20px
                  color #999
                  span 
                     margin-left 1px
</style>
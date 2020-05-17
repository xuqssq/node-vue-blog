<!-- 首页 -->
<template>
   <div>
      <nav-bar v-show="navStyle"></nav-bar>
      <nav-bar-g v-show="!navStyle"></nav-bar-g>
      <div class="bgImg">
         <img src="@/../static/bg1.jpg" alt="">
      </div>
      <div class="mirror">
         <nav-bar-m></nav-bar-m>
         <div class="about-hello">
            <h1 class="animated fadeInDown" style="font-weight:normal;font-size:33px">您好，我是<strong>XuQian</strong></h1>
            <h3 class="animated fadeInUp" style="font-weight:normal;font-size:20px">欢迎来到XuQian的个人网站</h3>
         </div>
      </div>
      <div class="content">
         <slogan-list>
            <span slot="say-china">我想对你说</span>
            <span slot="say-eng">I want to tell you</span>
            <span slot='say-content'>欢迎各位光临本站！本站旨在：前端技术分享，前端技术交流，个人经验分享，资源分享。欢迎在留言区给出您宝贵的建议哦！</span>
         </slogan-list>
         <article-list></article-list>
         <download-list></download-list>
         <content-m></content-m>
         <download-m></download-m>
         <div class="about-box">
            <slogan-list>
               <span slot="say-china">关于我</span>
               <span slot="say-eng">Coding,Reading,Games</span>
               <span slot='say-content'>喜欢研究前端，追求页面完美逻辑，喜欢专注、认真、积极上进的感觉，梦想是拿到字节跳动offer！</span>
            </slogan-list>

            <div class="contact-out-box">
               <div class="contact-box">
                  <a href="mailto:xuqssq@163.com"  title="给我发邮件" rel="external nofollow" class="contact-inf">
                     <img src="@/../static/email.png" alt="">
                     <span>xuqssq@163.com</span>
                  </a>
               </div>
               <div class="contact-box">
                  <a href="https://pic.xuqssq.com/blog/20200426/To6w1pjDb2z2.png" title="关注公众号" rel="external nofollow" class="contact-inf" target="_blank">
                     <img src="@/../static/gzh1.png" alt="">
                     <span>前端猿指北</span>
                  </a>
               </div>
               <div class="contact-box">
                  <a href="https://github.com/xuqssq" title="github" class="contact-inf"  target="_blank">
                     <img src="@/../static/github.png" alt="">
                     <span>github.com/xuqssq</span>
                  </a>
               </div>
            </div>
         </div>
         <div class="message" :style="backgroundImgUrl">
            <div class="message-item">
               <router-link :to="{name:'Message'}">欢迎留言</router-link>
            </div>
         </div>
         <div class="message-m" :style="backgroundImgUrl">
            <div class="message-item-m">
               <p class="animated fadeInDown">做个么得感情的代码机器</p>
               <p class="animated fadeInUp">喜欢一个人静静地呆着，什么都不想，什么都不理，就一个人，做着自己喜欢的事。</p>
            </div>
         </div>
         <footer-g></footer-g>
         <footer-m></footer-m>
      </div>
      
   </div>
</template>

<script>
import '@/common/css/animate.min.css'

import navBar from '@/components/Home/navBar'
import navBarG from '@/components/navBarG'
import navBarM from '@/components/Home/Mobile/navBarM'
import SloganList from '@/components/Home/SloganList'
import ArticleList from '@/components/Home/ArticleList'
import DownloadList from '@/components/Home/DownloadList'
import ContentM from '@/components/Home/Mobile/ContentM'
import DownloadM from '@/components/Home/Mobile/DownloadM'
import FooterG from '@/components/FooterG'
import FooterM from '@/components/Home/Mobile/FooterM'
export default {
    data () {
       return {
          navStyle:true,
          rollingMark:100,
          backgroundImgUrl:{
             backgroundImage: "url(" + require("../../../static/bg1.jpg") + ")",
             backgroundRepeat: "no-repeat",
          }
       };
    },

    components: {
       navBar,
       navBarG,
       navBarM,
       ArticleList,
       DownloadList,
       SloganList,
       ContentM,
       DownloadM,
       FooterG,
       FooterM
    },
    mounted(){
       this.bindEvent();
    },
    methods: {
      bindEvent(){
        window.addEventListener('scroll',this.downScroll,false)
      //   console.log(this.$el)
      },
      downScroll(){//向下滚动一点距离改变 nav 样式
         let rollingMark = document.documentElement.scrollTop
         if(rollingMark>=100){
            this.navStyle = false
         }else{
            this.navStyle = true
         }
       },
    },
    
}

</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
   .bgImg
      width 100%
      height 450px
      overflow hidden
      position fixed
      top 0px
      img 
         height 450px
         width  100%
         position relative
   .mirror 
      width 100%
      height 450px
      background: linear-gradient(135deg,rgba(94,136,255,.8) 0,rgba(94,18,214,.8) 100%);
      position absolute
      top 0px
      .about-hello
            height 100%           
            color #fff
            display flex
            flex-direction column
            justify-content center
            align-items center
            h3
               margin-top 10px
   .content 
      width 100%
      background-color #f5f8fc
      position absolute
      top 450px
      .about-box
         background-color #fdfdfd
         height 350px;
         width 100%
         @media screen and (max-device-width:960px){
            display none
         }
         .contact-out-box
            display flex
            width 892px
            align-items center
            margin 60px auto
            .contact-box
               width 300px
               height 80px
               .contact-inf
                  height 100%
                  display flex
                  align-items center
                  justify-content center
                  :hover
                     color #9d9d9d
                     transition all .2s 
                  img 
                     width 45px
                     height 45px
                  span 
                     font-size 18px
                     color #ccc
                     margin-left 10px
      .message
         width 100%
         height 120px
         // background: url('../../static/bg1.jpg') no-repeat;
         background-position center center
         @media screen and (max-device-width:960px){
            display none
         }
      .message-m
         display none
         width 100%
         height 120px
         // background: url('../../static/bg1.jpg') no-repeat;
         background-position center center
         @media screen and (max-device-width:960px){
            display block
            color #fff
         }
      .message-item-m
      .message-item
         background: linear-gradient(135deg,rgba(94,136,255,.8) 0,rgba(94,18,214,.8) 100%);
         width 100%
         height 100%
         display flex;
         align-items center 
         justify-content center
         a
            display block
            width 120px
            height 40px
            background-color #ffffff
            color #805EF6
            text-align center
            line-height 40px
            border-radius 20px
      .message-item-m
         flex-direction column
         text-align center
         font-size 18px
         font-weight bold 
         p:nth-of-type(2)
            width 300px
            margin-top 10px
            font-size 12px
            font-weight normal


   
</style>
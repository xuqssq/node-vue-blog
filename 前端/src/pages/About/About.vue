<!-- 关于页面 -->
<template>
   <div>
      <!-- <remote-js src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></remote-js> -->
      <nav-bar-g></nav-bar-g>
      <header style="background-color:#6a70ec;width:100%;height:60px">
         <nav-bar-m></nav-bar-m>
      </header>

      <div class="about-top-box">
         <img src="@/../static/650blue.png" alt="" class="animated fadeInDown">
         <h1 class="animated fadeInUp">XuQian</h1>
         <span style='margin:15px 0px;padding:0px 15px;text-align:center' class="animated fadeInUp">校大学生，计算机专业，主攻前端，略懂后端，立志成为前端布道者！</span>
         <div class="about-position">
            <i class="fa fa-map-marker" aria-hidden="true" style="font-size:15px"></i>
            <span>广东-佛山</span>
         </div>
         <div class="about-contact-box">
            <a href="javascript:;" title="点击QQ联系我" @click="openQQcon()" rel="external nofollow">
               <i class="fa fa-qq" aria-hidden="true"></i>
            </a>
            <a href="mailto:xuqssq@163.com" title="给我发邮件" rel="external nofollow">
               <i class="fa fa-envelope" aria-hidden="true"></i>
            </a>
            <a href="https://pic.xuqssq.com/blog/20200426/To6w1pjDb2z2.png" title="关注公众号" rel="external nofollow"  target="_blank">
               <i class="fa fa-weixin" aria-hidden="true"></i>
            </a>
            <a href="https://github.com/xuqssq" title="github"  target="_blank">
               <i class="fa fa-github" aria-hidden="true"></i>
            </a>
         </div>
      </div>

      <div class="about-content-box">
         <img src="@/../static/bg1.jpg" alt="" width="100%" height="100%" class="about-mirror-bg">
         <div class="about-content-mirror">
            <p class="animated fadeInUp">
               一直想做一件事——为自己写一个个人网站，主要记录学习过程中遇到的问题，同时可以记录生活中的故事。之前玩过很多博客模板像hexo、WordPress、Typecho......，但是都不耐看就废弃了，个人比较喜欢简单干净的页面， 一直在改改改并没改出令自己满意的页面，暂且先像现在这样吧！本站未使用任何模板，如果前端页面的设计碰到了合眼缘的同学，欢迎仿照，但请标明出处。本站目前只实现了一些简单的功能，主要用于分享一些文章，后期会对网站进行更新。
            </p>
         </div>
      </div>

      <div class="about-skill-box" :style="SkillBoxBackground">
         <div class="myStudy clearfix">
            <div class="progress_bar" v-for="(item,index) in skillList" :key="index">
               <div class="pro-bar">
                  <small class="progress_bar_title">
                     {{item.skillName}}
                     <span class="progress_number">{{item.skillMasteryLevel}}%</span>
                  </small>
                  <span class="progress-bar-inner" :style="{width:item.skillMasteryLevel+'%',backgroundColor:item.skillColor}"></span>
               </div>
            </div>
         </div>
      </div>

      <ul class="site-data-box">
         <li style="border-right:none">
            <span>总访问量</span>
               <span id="busuanzi_value_site_pv" style="font-size:26px;font-weight:bold;color:#6F75ED">{{pv}}</span>
         </li>
         <li>
            <span>总访客数</span>
            <span id="busuanzi_value_site_uv" style="font-size:26px;font-weight:bold;color:#6F75ED">{{uv}}</span>
         </li>
         <li>
            <span>总IP数</span>
            <span id="busuanzi_value_page_pv" style="font-size:26px;font-weight:bold;color:#6F75ED">{{ip}}</span>
         </li>
      </ul>

      <div class="about-web">
         <div class="about-web-list">
            <h2 class="about-web-title">关于本站</h2>
            <div class="about-web-con">
               <p>前端：HTML + CSS + JavaScript + Vue全家桶，无模板</p>
               <p>后端：Node.js + Express + MongoDB + Mongoose</p>
            </div>
         </div>

         <div class="about-web-list">
            <h2 class="about-web-title">特别说明</h2>
            <div class="about-web-con">
               <p>本站文章仅代表个人观点，和任何组织或个人无关。</p>
               <p>本站对主流浏览器均兼容。</p>
               <p>用户留言邮箱仅作回复消息用，不对外使用。</p>
               <p>本站第一版2020年4月15开始搭建，后台管理系统暂仅对博主开发，静待第二版.....</p>
            </div>
         </div>

         <div class="about-web-list">
            <h2 class="about-web-title">关于版权</h2>
            <div class="about-web-con">
               <p>本站文章为站长原创或者归纳整理（归纳整理的文章均会标明出处），若转载本站文章请标明出处。</p>
               <p>只要在使用时注明出处，那么您可以可以对本站内容进行转载、节选、二次创作，但是您不得对其用于商业目的。</p>
            </div>
         </div>
      </div>
      <footer-g></footer-g>
      <footer-m></footer-m>
   </div>
</template>

<script>
import navBarG from '@/components/navBarG'
import navBarM from '@/components/Home/Mobile/navBarM'
import FooterG from '@/components/FooterG'
import FooterM from '@/components/Home/Mobile/FooterM'
import { mapState } from 'vuex'
export default {
   data () {
      return {
         SkillBoxBackground:{
            backgroundImage: "url(" + require("./../../../static/indexbg3.png") + ")",
            backgroundRepeat: "no-repeat",
         },
         pv:'',
         uv:'',
         ip:'',
         // skill:[//模拟数据
         //    {skillName:'HTML5',skillMasteryLevel:75,skillColor:'#1abc9c'},
         //    {skillName:'CSS5',skillMasteryLevel:75,skillColor:'#ff5500'},
         //    {skillName:'JavaScropt',skillMasteryLevel:70,skillColor:'#5555ff'},
         //    {skillName:'JQuer',skillMasteryLevel:35,skillColor:'#aa55ff'},
         //    {skillName:'Vue.js',skillMasteryLevel:80,skillColor:'#55aa00'},
         //    {skillName:'node.js',skillMasteryLevel:40,skillColor:'#ff7280'},
         //    {skillName:'php',skillMasteryLevel:15,skillColor:'#d2d200'},
         //    {skillName:'MongoDB',skillMasteryLevel:30,skillColor:'#2fbdff'},
         //    {skillName:'PhotoShop',skillMasteryLevel:45,skillColor:'#55557f'},
         // ]
      };
   },

    components: {
         navBarG,
         navBarM,
         FooterG,
         FooterM,
    },
    computed:{
        ...mapState(['skillList','baidutjList']),
    },
    mounted(){
       this.$store.dispatch('reqSkillList')
       this.$store.dispatch('reqBaiDutj')
    },
    watch:{
        baidutjList(){
            this.$nextTick(()=>{
               this.pv = this.baidutjList.data[0].result.sum[0][0]
               this.uv = this.baidutjList.data[0].result.sum[0][2]
               this.ip = this.baidutjList.data[0].result.sum[0][5]
            })
        }
    },
    methods: {
      openQQcon(){
         window.open('tencent://message/?uin=2035805156&&Site=&Menu-=yes')
      },
    }
}

</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
   .about-top-box
      display flex
      flex-direction column
      align-items center
      background-color #ffffff
      padding 30px 0px
      font-size 16px
      width 100%
      img 
         width 80px
         height 80px
      .about-position
         font-size 12px
         color #808080
      .about-contact-box
         margin-top 15px
         padding-top 15px
         width 70%
         text-align center
         border-top 1px solid #f6f5ff
         a
            i 
               font-size 30px
               margin 5px
               color #52515c
   .about-content-box
      .about-mirror-bg
         position fixed
         top 0px
         z-index -1
      .about-content-mirror
         background linear-gradient(135deg,rgba(94,136,255,.6) 0,rgba(94,18,214,.8) 100%)
         width 100%
         padding 40px 50px
         box-sizing border-box
         @media screen and (max-device-width:960px){
            padding 30px 10px
         }
         p
            width 900px
            margin 0px auto
            color #e1e2ec
            font-size 13px
            line-height 26px
            text-indent 2em
            @media screen and (max-device-width:960px){
               width 80%
            }
   .about-skill-box
      color #7a7e85
      background-color #fff
      background-size: 100%;
      padding 50px 0px
      .myStudy
         max-width 1080px
         margin 0px auto
         display flex
         flex-wrap wrap
         @media screen and (max-width: 1170px){
            justify-content space-between
            padding 0px 0px 0px 10px
         }
         @media screen and (max-device-width:960px){
            justify-content center
         }
      .progress_bar
         width: 300px
         margin: 0px 30px 20px 30px
         @media screen and (max-device-width:960px){
            margin 0px 30px 0px 30px
         }
      .progress_bar .pro-bar 
         width 100%
         background hsl(0, 0%, 91%)
         box-shadow 0 1px 2px hsla(0, 0%, 0%, 0.1) inset
         height 6px
         margin-bottom 12px
         margin-top 50px
         position relative
      .progress_bar .progress_bar_title
         color hsl(218, 4%, 50%)
         font-size 15px
         font-weight 300
         position relative
         top -28px
         z-index 1
         display flex
         justify-content space-between
      .progress_bar .progress_number
         margin-top: 2px
      
      .progress_bar .progress-bar-inner 
         background-color hsl(0, 0%, 88%)
         display: block
         width 0
         height 100%
         position absolute
         top 0
         left 0
         transition: width 1s linear 0s;
         animation: animate-positive 2s;
      
      .progress_bar .progress-bar-inner:before 
         content ""
         background-color hsl(0, 0%, 100%)
         border-radius 50%
         width 4px
         height 4px
         position absolute
         right 1px
         top 0
         z-index 1
      .progress_bar .progress-bar-inner:after {
         content: "";
         width: 14px;
         height: 14px;
         background-color: inherit;
         border-radius: 50%;
         position: absolute;
         right: -4px;
         top: -5px;
      }
      @-webkit-keyframes animate-positive{
         0% { width: 0%; }
      }
      @keyframes animate-positive{
         0% { width: 0%; }
      }

   .about-web
      background-color #fff
      padding 10px 50px
      margin-top -1px
      .about-web-list
         .about-web-title
            margin 20px 0px
            font-size 14px
         .about-web-con
            color #666
            font-size 13px
            line-height 21px
            margin-bottom 20px
   .site-data-box
      display flex
      justify-content center
      flex-wrap wrap
      border-bottom 1px solid #f6f6f6
      padding 20px 0px
      margin-top -1px
      li
         display flex
         flex-direction column
         padding 0px 50px
         margin 15px 0px 
         text-align center
         border-right 1px solid #f6f6f6
         @media screen and (max-device-width:960px){
            border-right none
         }
         span:nth-of-type(1)
            color #666
            font-size 13px
            margin-bottom 10px
      width 100%
      color #6F75ED
      background-color #fff
      // .site-num
      //    font-size 26px
      //    font-weight bold
      //    color #6F75ED
</style>
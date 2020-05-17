<!-- 手机端文章列表页面 -->
<template>
   <div class="box">
      <header class="article-m-header" :style="headerBackground">
         <nav-bar-m></nav-bar-m>
         <div class="header-text">
            <h1 class="animated fadeInDown">追求最完美逻辑</h1>
            <p class="animated fadeInUp">身体和灵魂，总要有一个在路上</p>
         </div>
      </header>
   </div>
</template>

<script>
import navBarM from './../../Home/Mobile/navBarM'
export default {
    data () {
       return {
          headerBackground:{
            backgroundImage: "url(" + require("./../../../../static/bg1.jpg") + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition:"center center",
          },
       };
    },

    components: {
       navBarM,
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
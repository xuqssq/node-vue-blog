<!-- 首页滑动后的导航 -->
<template>
   <div class="box">
      <nav class="nav-box">
         <router-link to='/home' class="logo">
            <img src="@/../static/logo2.png" alt="">
         </router-link>
         <ul class="nav-item">
            <li>
               <router-link to='/home' active-class="active">首页</router-link>
            </li>
            <li>
               <router-link to='/article' active-class="active">文章</router-link>
            </li>
            <li>
               <router-link to='/resources' active-class="active">资源下载</router-link>
            </li>
            <li>
               <router-link to='/timeaxis' active-class="active">时光轴</router-link>
            </li>
            <li>
               <router-link to='/about' active-class="active">关于</router-link>
            </li>
            <li>
               <router-link to='/friendslink' active-class="active">友链</router-link>
            </li>
            <li>
               <router-link to='/message' active-class="active">留言</router-link>
            </li>
         </ul>
      </nav>
   </div>
</template>

<script>
export default {
    data () {
       return {

       };
    },

    components: {},
    mounted(){

    },
    methods: {},
}

</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
    .box
        position fixed
        top 0px
        width 100%
        z-index 100
        .nav-box 
            display flex
            height 60px;
            justify-content space-between
            align-items center
            padding 0px 60px
            background-color #fff
            font-size 0.9em
            box-shadow: 0 10px 28px 0 rgba(182, 193, 215, 0.1);
            @media screen and (max-device-width:960px){
               display none
            }
            .logo
                width 113px
                height 40px
                margin-left 20px
                @media screen and (max-device-width:960px){
                   width 260px
                   height  40px
                }
                img 
                  width 100%
                  height 100%
            .nav-item
               display flex
               width 520px
               justify-content space-between
               margin-right 20px
               li a
                  display block
                  width 80px
                  height 40px
                  line-height 40px
                  text-align center
               li a:hover
                  color #5d63d0
               .active
                  color #5d63d0
        
</style>
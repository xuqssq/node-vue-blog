<!-- 首页未滑动时的导航 -->
<template>
   <div class="box">
      <nav class="nav-box">
         <router-link to='/home' class="logo">
            <img src="@/../static/logo1.png" alt="">
         </router-link>
         <ul class="nav-item">
            <li>
               <router-link to='/home'>首页</router-link>
            </li>
            <li>
               <router-link to='/article'>文章</router-link>
            </li>
            <li>
               <router-link to='/resources'>资源下载</router-link>
            </li>
            <li>
               <router-link to='/timeaxis'>时光轴</router-link>
            </li>
            <li>
               <router-link to='/about'>关于</router-link>
            </li>
            <li>
               <router-link to='/friendslink'>友链</router-link>
            </li>
            <li>
               <router-link to='/message'>留言</router-link>
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
        z-index 9999
        .nav-box 
            display flex
            height 60px;
            justify-content space-between
            align-items center
            padding 0px 60px
            font-size 0.9em
            @media screen and (max-device-width:960px){
               display none
            }
            .logo
                width 113px
                height 40px
                margin-left 20px
                img 
                    width 100%
                    height 100%
            .nav-item
                display flex
                width 520px
                justify-content space-between
                margin-right 20px
                a
                  color #fff
                  display block
                  width 80px
                  height 40px
                  line-height 40px
                  text-align center
        
</style>
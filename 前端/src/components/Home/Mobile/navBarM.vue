<!-- 手机端导航 -->
<template>
   <div class="box">
       <div class="header-box">
            <div class="openBtn-box" :style="openBtn" @click="openNav()" v-show='!openNavPosition'>
                <span class="openBtn"></span>
                <span class="openBtn"></span>
                <span class="openBtn"></span>
            </div>

            <div class=" openBtn-box closeBtn-box" :style='closeBtn' @click="openNav()" v-show='openNavPosition'>
                <span class="openBtn closeBtn"></span>
                <span class=" openBtn closeBtn"></span>
            </div>
       </div>

      <div class="openNav" :style="openNavPosition">
          <div href="#" class="logo-m">
              <img src="@/../static/650fff.png" alt="">
          </div>
          <div class="introduce">
            <span class="symbol">"</span>
            <span>做了一点微小的事情~</span>
            <span class="symbol">"</span>
          </div>
          <ul class="open-nav-box">
              <li class="open-nav-list">
                  <router-link to="/home" class="open-nav-item">
                      <i class="fa fa-home" aria-hidden="true"></i>
                      <span>首页</span>
                  </router-link>
              </li>
              <li class="open-nav-list">
                  <router-link to="/article" class="open-nav-item">
                      <i class="fa fa-bookmark" aria-hidden="true"></i>
                      <span>文章</span>
                  </router-link>
              </li>
               <li class="open-nav-list">
                  <router-link to="/resources" class="open-nav-item">
                      <i class="fa fa-archive" aria-hidden="true"></i>
                      <span>资源下载</span>
                  </router-link>
              </li>
               <li class="open-nav-list">
                  <router-link to="/timeaxis" class="open-nav-item">
                      <i class="fa fa-paper-plane" aria-hidden="true"></i>
                      <span>时光轴</span>
                  </router-link>
              </li>
               <li class="open-nav-list">
                  <router-link to="/about" class="open-nav-item">
                      <i class="fa fa-user" aria-hidden="true"></i>
                      <span>关于</span>
                  </router-link>
              </li>
               <li class="open-nav-list">
                  <router-link to="/friendslink" class="open-nav-item">
                      <i class="fa  fa-link" aria-hidden="true"></i>
                      <span>友链</span>
                  </router-link>
              </li>
               <li class="open-nav-list">
                  <router-link to="/message" class="open-nav-item">
                      <i class="fa fa-envelope" aria-hidden="true"></i>
                      <span>留言</span>
                  </router-link>
              </li>
          </ul>
      </div>
      <div class="mask-m" :style="mask" @touchstart='openNav()'></div>
   </div>
</template>

<script>
export default {
    data () {
       return {
           openNavPosition:'',//导航
           openBtn:'',//打开按钮
           closeBtn:'', //关闭按钮
           mask:'',//遮罩
       };
    },

    components: {
    },
    mounted(){

    },
    methods: {
        openNav(){
            if(this.openNavPosition==''){
                 this.openNavPosition ='left:' +0+'px'
                 this.openBtn ='left:' +280+'px'
                 this.closeBtn ='left:' +280+'px;position:fixed'
                 this.mask = 'display:block'
            }else{
                this.openNavPosition =''
                this.openBtn=''
                this.closeBtn=''
                this.mask=''
            }
           
        },
    },
}

</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
        .header-box
            // background-color red
            // width 100%
            // height 60px
            // box-shadow 0 10px 28px 0 rgba(182, 193, 215, 0.1)
        .openBtn-box
            display none
            @media screen and (max-device-width:960px){
                display block
                position absolute
                z-index 10000
                left 20px
                top 20px 
            }
            .openBtn
                display block
                width 22px
                height 2px
                background #fff
                border-radius 1px
                margin-top 4px
        .openNav
            display none
            @media screen and (max-device-width:960px){
                display block
                width 280px
                background linear-gradient(135deg,rgba(94,136,255,.9) 0,rgba(94,18,214,.9) 100%)
                height 100%
                position relative
                z-index 9999
                position fixed
                top 0px
                left -280px
                transition  all .2s linear
                color #fff
            }
            .logo-m
                @media screen and (max-device-width:960px){ 
                    text-align center
                    margin 30px auto
                }
            .logo-m img
                @media screen and (max-device-width:960px){
                    width 100px
                    height 100px
                }
            .introduce 
                @media screen and (max-device-width:960px){ 
                    text-align center
                    margin-top -30px
                    width 100%
                    overflow hidden
                    text-overflow ellipsis
                    white-space nowrap
                }
                .symbol
                    @media screen and (max-device-width:960px){ 
                        font-size 28px
                        color #333
                    }
            .open-nav-box
                margin-top 20px
                .open-nav-list
                    border-bottom 1px solid pink
                    width 90%
                    margin 10px auto
                    padding 5px 15px
                    box-sizing border-box
                    .open-nav-item
                        i 
                            font-size 16px
                            margin-right 5px
                        color #fff
        .mask-m
            display: none
            @media screen and (max-device-width:960px){
                background-color rgba(0, 0, 0, .5)
                width 100%
                height 100%
                position  fixed
                top  0
                left 0
                z-index 100
            }
        .closeBtn-box
            @media screen and (max-device-width:960px){
               margin-top 6px
               transition  all .7s linear
            }
            .closeBtn:nth-of-type(1)
                @media screen and (max-device-width:960px){
                    transform rotate(45deg)
                    position relative
                }
            .closeBtn:nth-of-type(2)
                @media screen and (max-device-width:960px){
                    transform rotate(-45deg)
                    position absolute
                    top 0px
                }
</style>
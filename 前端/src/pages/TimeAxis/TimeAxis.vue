<!-- 时光轴 -->
<template>
   <div>
       <nav-bar-g></nav-bar-g>
       <nav-bar-m></nav-bar-m>
       <div class="header-bg-box">
            <img src="@/../static/talk2.jpg" alt="" width="100%" height="100%">
       </div>
        <div class="axis-content">
           <ul class="axis-list">
               <li class="axis-item" v-for="(item,index) in timeLineList" :key="index">
                    <div class="loc-icon">
                        <img src="@/../static/cd-icon-location.svg" alt="">
                    </div>
                    <div class="axis-container animated fadeInUp">
                        <p class="axis-sub">{{item.TimeLineInt}}</p> 
                        <p class="axis-time">{{item.TimeLineTime}}</p>
                    </div>
               </li>
           </ul>
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
       };
    },

    components: {
        navBarG,
        navBarM,
        FooterG,
        FooterM
    },
    computed:{
        ...mapState(['timeLineList']),
    },
    mounted(){
        this.$store.dispatch('reqTimeLineList')
    },
    methods: {}
}

</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
    .header-bg-box
        margin-top 60px
        height 150px
        text-align center
        @media screen and (max-device-width:960px){
               margin-top 0px
               height 60px
        }
    .axis-content
        background-color #fff
        @media (max-width: 1170px){
            padding 20px 10px 0px 10px    
        }
        .axis-list
            background-color #fff
            border-radius 6px
            max-width 1170px
            margin 0px auto
            margin-top -80px
            position relative
            padding 30px 0px 60px 0px
            @media screen and (max-device-width:960px){
                margin-top -20px
                padding 0px 0px 40px 0px
            }
            &:before
                content:''
                position absolute
                background-color #e5e8f1
                height 100%
                width 4px
                top 0px
                left 50%
                @media (max-width: 1170px){
                    left 29px
                }
            li:nth-of-type(2n)
                .axis-container
                    flex-flow row-reverse
                .axis-time
                    margin-right 120px
            .axis-container
                display flex
                padding 0px 40px
                @media (max-width: 1170px){
                    display block
                }
                .axis-sub
                    // flex 5
                    width 45%
                    color #4c416c
                    background-color #f5f6f9
                    padding 25px 25px
                    border-radius 6px
                    box-sizing border-box
                    @media (max-width: 1170px){
                        width 100%
                        padding 15px 15px
                        margin-left 25px
                    }
                .axis-time
                    // flex 1
                    color #a8aebf 
                    text-align center
                    margin-left 120px
                    font-size 13px
                    line-height 40px
                    @media (max-width: 1170px){
                        background-color #f5f6f9
                        width 100%
                        margin-left 25px
                        text-align left
                        margin-top -2px
                        padding 0px 15px 15px 15px
                        box-sizing border-box
                        line-height 20px
                    }
            .loc-icon
                width 40px
                height 40px
                background-color #6A70EC
                box-shadow 0 0 0 4px #ffffff, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)
                border-radius 50%
                display flex
                align-items center
                justify-content center
                position relative
                left 48.5%
                top 40px
                @media (max-width: 1170px){
                    left 10px
                    top 40px
                        
                }
                img 
                    width 18px
                    height 18px
</style>
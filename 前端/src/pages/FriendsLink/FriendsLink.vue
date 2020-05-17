<!-- 友链 -->
<template>
   <div>
        <nav-bar-g></nav-bar-g>
        <header style="background-color:#6a70ec;width:100%;height:60px">
            <nav-bar-m></nav-bar-m>
        </header>
        <div class="link-aff-box">
            <p class="link-aff-title">友链申请说明</p>
            <p class="link-aff-con">交换友链可在留言板留言，同时请将本站加入友链</p>
            <div class="site-inf">
                <p>名称：XuQian</p>
                <p>网址：https://xuqssq.com</p>
                <p>图标：https://xuqssq.com/static/img/650blue.50a2eed.png</p>
                <p>描述：一个前端程序员的个人博客 | 记录生活，记录故事</p>
            </div>
            <div class="site-tip">
                <p>本站优先选择同类原创、内容相近的博客或网站，您的站点内容可以为技术类、IT科技、互联网和生活</p>
                <p>任何包含违反国家法律法规内容的网站均不采纳</p>
                <p>特别提醒：申请提交后若无其它原因将在24小时内完成审核,如超过时间还未通过,请留言或私信给我</p>
            </div>
        </div>

        <div class="all-links-box">
            <p class="link-aff-title">友情链接</p>
            <ul class="friends-links-list">
                <li class="friends-links-item" v-for="(item,index) in friendsList" :key='index'>
                    <a :href="item.friendsAddress" class="friends-links-a"  target="_blank">
                        <div class="friends-links-inf">
                            <img :src="item.friendsLogo" alt="logo">
                            <span>{{item.friendsName}}</span>
                        </div>
                        <p class="friends-links-int">{{item.friendsInt}}</p>
                    </a>
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
        ...mapState(['friendsList'])
    },
    mounted(){
        this.$store.dispatch('reqFriendsList')
    },
    methods: {}
}

</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
    .link-aff-box,.all-links-box
        width 1100px
        background-color #ffffff
        margin auto
        margin-top 30px
        padding 30px
        box-sizing border-box
        @media (max-width: 1170px){
            width 100%
            margin-top 0px
        }
        .link-aff-title
            color #333
            font-weight 700
            font-size 16px
        .link-aff-con
            margin 10px 0px 20px 0px
        .site-inf
            background-color #f3f5f9
            color  #5757c8
            padding 20px
            line-height 27px
            border-left 4px solid #cbd8f5
        .site-tip
            margin-top 10px
            color #666666
            line-height 24px
            font-size 13px
    .all-links-box
        margin-top 10px
        margin-bottom 30px
        .friends-links-list
            display flex
            flex-wrap wrap
            .friends-links-item
                width 250px
                padding 20px
                border 1px solid #f4f4f4
                border-radius 2px
                margin 10px 10px 10px 0px
                padding 20px
                box-sizing border-box
                @media (max-device-width:1170px){
                    width 100%
                }
                // @media (max-width: 1170px){
                //     width 231px
                // }
                .friends-links-a
                    display block
                    color #333
                    font-size 16px
                    .friends-links-inf
                        display flex
                        align-items center
                        img 
                            width 40px
                            height 40px
                            border-radius 50%
                            margin-right 10px
                    .friends-links-int
                        height 65px
                        overflow hidden 
                        display -webkit-box
                        margin-top 5px
                        line-height 21px
                        text-overflow ellipsis
                        font-size 13px
                        -webkit-box-orient vertical
                        -webkit-line-clamp 3
</style>
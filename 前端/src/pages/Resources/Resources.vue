<!-- 资源下载列表 -->
<template>
   <div>
       <nav-bar-g></nav-bar-g>
       <article-list></article-list>
       <div class="article-content-box">
           <div class="left-box">
                <div class="left-1-box" :style="LeftOBoxBackground">
                    <p class="subimg-title">资源下载</p>
                    <p class="subimg-d">记录学习过程中编写的一些插件或者项目等，共享出来方便一起学习。</p>
                    <router-link :to="{name:'Message'}" class="to-msg">留言</router-link>
                </div>
                <ul class="left-2-box">
                    <li class="left-2-item animated fadeInUp" v-for="(item,index) in resourcesList" :key="index">
                        <div class="reading-box">
                            <img src="@/../static/sel.png" alt="Reading volume" class="reading-img">
                            <p class="reading-num">{{item.views}}</p>
                        </div>
                        <router-link :to="'/resources/details/'+item._id"  class="to-link-text">
                           <div class="to-text">
                                <h2 class="text-title">{{item.resourcesTitle}}</h2>
                                <p class="text-b-introduction">{{item.resourcesSummary}}</p>
                                <div class="release-time-box">
                                    <span>
                                        <i class="fa fa-clock-o" aria-hidden="true" style="color: #EEB173;font-size:16px"></i>
                                        <span class="release-time">时间：{{item.releaseTime}}</span>
                                    </span>
                                    <span class="release-tags">
                                        <i class="fa fa-download" aria-hidden="true"  style="color: #55aaff"></i>
                                        <span>下载次数：{{item.downloadVal}}</span>
                                    </span>
                                </div>
                           </div>
                            <img :src="item.imageUrl" alt="Dlowload Logo" class="dlowload-logo">
                        </router-link>
                    </li>
                </ul>
                <paging-device  :totalCount="resourceCount" :pageSize="pageSize" v-model="pageNo"></paging-device>
           </div>
           <div class="right-box">
               <div class="right-1-inf">
                   <img src="@/../static/650blue.png" alt="author" class="aut-img">
                   <p class="aut-name">XuQian</p>
                   <p class="aut-say">
                       <span class="animated fadeInDown">保持对未知世界永不停息的热情~</span>
                       <span class="animated fadeInUp">心之所向，无问西东 —— 2020</span>
                   </p>
                   <div class="aut-contact">
                       <a href="javascript:;" title="点击QQ联系我" @click="openQQcon()" rel="external nofollow">
                           <i class="fa fa-qq" aria-hidden="true"></i>
                       </a>
                       <a href="mailto:xuqssq@163.com" title="给我发邮件" rel="external nofollow">
                           <i class="fa fa-envelope" aria-hidden="true"></i>
                       </a>
                       <a href="https://xuqian.xiaomujin.club/blog/20200415/MKqdMnHX2Vd1.png" title="关注公众号" rel="external nofollow">
                           <i class="fa fa-weixin" aria-hidden="true"></i>
                       </a>
                       <a href="https://github.com/xuqssq" title="github">
                           <i class="fa fa-github" aria-hidden="true"></i>
                       </a>
                   </div>
                   <router-link :to="{name:'Message'}" class="to-msg">欢迎留言</router-link>
               </div>
               <div class="right-2-sort right-3-box animated fadeInUp">
                    <hot-resources></hot-resources>
               </div>
           </div>
       </div>
       <footer-g></footer-g>
       <footer-m></footer-m>
   </div>
</template>

<script>
import navBarG from '@/components/navBarG'
import PagingDevice from '@/components/PagingDevice'
import HotResources from '@/components/Resources/HotResources/HotResources'
import ArticleList from '@/components/Article/Mobile/ArticleListM'
import FooterG from '@/components/FooterG'
import FooterM from '@/components/Home/Mobile/FooterM'
import { mapState } from 'vuex'
export default {
    data () {
       return {
            LeftOBoxBackground:{
                backgroundImage: "url(" + require("./../../../static/lit3.jpg") + ")",
                backgroundRepeat: "no-repeat",
            },
            pageNo:1,//第几页
            pageSize:10  //请求几条
       };
    },

    components: {
        navBarG,
        PagingDevice,
        HotResources,
        ArticleList,
        FooterG,
        FooterM
    },
    computed:{
        ...mapState(['resourcesList','resourceCount']),
    },
    watch:{
        pageNo(){
            this.$store.dispatch('reqResourcesList',{pageNo:this.pageNo,pageSize:this.pageSize})
        }
    },
    mounted(){
        this.$store.dispatch('reqResourcesList',{pageNo:this.pageNo,pageSize:this.pageSize})
    },
    methods: {
        openQQcon(){
            window.open('tencent://message/?uin=2035805156&&Site=&Menu-=yes')
        }
    }
}

</script>
<style scoped lang='stylus' ref="reference" ref="stylesheet/stylus">
    .article-content-box
        width 1100px
        margin 0px auto
        margin-top 60px
        margin-bottom  30px
        padding-top 30px
        box-sizing border-box
        display flex
        @media screen and (max-device-width:960px){
            width 100%
            margin-top -20px
        }
        .left-box
            flex 3.8
            margin-right 15px
            @media screen and (max-device-width:960px){
                width 100%
                margin 0px 10px
            }
            @media screen and (max-width:1070px){
                // width 80%
            }
            .left-1-box
                background-color #fff
                height 280px
                width 785px
                background-position 90% 40%
                background-size 40%
                padding 40px 80px
                box-sizing border-box
                border-radius 5px
                @media screen and (max-device-width:960px){
                    display none
                    width 100%
                }
                .subimg-title
                    font-size 24px
                    margin-top 23px
                .subimg-d
                    margin 20px 0px
                    color #595959
                    width 300px;
                    line-height 25px;
                .to-msg
                    display block
                    border-radius 4px
                    background-color #6a70ec
                    color #fff
                    width 52px
                    height 30px
                    text-align center
                    line-height 30px
            .left-2-box
                background-color #fff
                margin-top 15px
                border-radius 5px
                .left-2-item
                    display flex
                    padding 30px 24px
                    border-bottom: 1px solid #f6f6f6
                    .reading-box
                        background-color #FAFAFA
                        height 47px
                        display flex
                        flex-direction column
                        align-items center
                        justify-content center
                        border-radius 5px
                        width 100%
                        @media screen and (max-device-width:960px){
                            width 10%
                        }
                        .reading-img
                            width 26px
                            height 20px
                        .reading-num
                            font-size 12px
                            font-weight bold
                            margin-top 2px
                    .to-link-text
                        display flex
                        @media screen and (max-device-width:960px){
                            flex-direction column
                        }
                        .dlowload-logo
                            width 160px
                            height 100px
                            margin 10px 15px 0px 30px
                            border-radius 5px
                            @media screen and (max-device-width:960px){
                                width 90%
                                height 150px
                                margin 15px
                            }
                        .to-text
                            width 470px
                            margin-left 20px
                            @media screen and (max-device-width:960px){
                                width 90%
                            }
                            .text-title
                                color #000
                                font-size 16px
                            .text-b-introduction
                                margin 10px 0px
                                color #8c8c8c
                                font-size 13px
                                line-height 23px
                                @media screen and (max-device-width:960px){
                                    width 100%
                                }
                            .release-time-box
                                font-size 13px
                                color #aaaaaa
                                @media screen and (max-device-width:960px){
                                    display flex
                                    flex-direction column
                                }
                                .release-tags
                                    float right
                                    @media screen and (max-device-width:960px){
                                        margin-top 5px
                                    } 
        .right-box
            flex 1.5
            height 100%
            @media screen and (max-device-width:960px){
                display none
            }
            .right-1-inf
                background-color #ffffff
                display flex
                flex-direction column
                align-items center
                padding 30px 30px
                border-radius 5px
                .aut-img
                    width 55px
                    height 54px
                .aut-name
                    font-weight bold
                    font-size 16px
                    margin 10px 0px
                .aut-say
                    display flex
                    flex-direction column
                    color #888
                    font-size 13px
                    text-align center
                    line-height 21px
                .aut-contact
                    width 195px
                    display flex
                    justify-content space-between
                    margin 10px 0px
                    a
                        color #485293
                        font-size 28px
                        i 
                            transition all .3s
                        :hover
                            color #6A70EC
                            transition all .3s
                .to-msg
                    display block
                    background-color #6A70EC
                    color #ffffff
                    width 100%
                    text-align center
                    line-height 40px
                    font-size 16px
                    border-radius 2px
                    margin 10px 0px 5px 0px
            .right-2-sort
                background-color #ffffff
                padding 15px 16px
                margin-top 15px
                box-sizing border-box
</style>
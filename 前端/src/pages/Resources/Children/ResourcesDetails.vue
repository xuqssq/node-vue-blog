<!-- 资源详情页 -->
<template>
    <div>
        <nav-bar-g></nav-bar-g>
        <article-list></article-list>
       <div class="article-content-box">
           <div class="left-box">
                <header class="header-title">
                    <h1>{{resources.resourcesTitle}}</h1>
                    <div class="header-ico-box">
                        <span class="item-box">
                            <i class="fa fa-eye" aria-hidden="true" style="color:#000"></i>
                            <span>浏览量：{{resources.views}}</span>
                        </span>
                        <span class="item-box">
                            <i class="fa fa-clock-o" aria-hidden="true" style="color:#EEB173"></i>
                            <span>发表时间：{{resources.releaseTime}}</span>
                        </span>
                        <span class="item-box">
                            <i class="fa fa-download" aria-hidden="true" style="color:#55aaff"></i>
                            <span>下载次数：{{resources.downloadVal}}</span>
                        </span>
                    </div>
                </header>
                <article v-html="resources.htmlResources" v-highlight class="content-box">

                </article>
           </div>
           <div class="right-box">
               <div class="right-2-sort animated fadeInUp">
                    <h3 class="right-2-title">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <span>资源下载</span>
                    </h3>
                    <ul class="sort-list">
                        <li class="sort-item">
                            <div class="sort-id">
                                <img :src="resources.imageUrl">
                            </div>
                            <p class="sort-title sort-inf">{{resources.resourcesTitle}}</p>
                            <a :href="resources.fileUrl" class="donloadBtn" @click="downloadVal()" target="_blank">下载</a>
                            <p class="notes">
                                注：资源一般放在本网站或github上，请仔细阅读详情。
                                <span class="import-notes">未经允许切勿用于商业用途。</span>
                            </p>
                        </li>
                    </ul>
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
import { getResourcesDetails , getresourcesDonloadVal} from '@/api/index'
import { Message } from 'element-ui'
import navBarG from '@/components/navBarG'
import HotResources from '@/components/Resources/HotResources/HotResources'
import ArticleList from '@/components/Article/Mobile/ArticleListM'
import FooterG from '@/components/FooterG'
import FooterM from '@/components/Home/Mobile/FooterM'
export default {
    data () {
        return {
            resources:'',
        };
    },

    components: {
        navBarG,
        HotResources,
        ArticleList,
        FooterG,
        FooterM
    },
    computed:{

    },
    mounted(){
        this.init()
    },
    methods: {
        async init(){
            const result =await getResourcesDetails(this.id)
            if(result.status==200){
                this.resources = result.result
            }else{
                Message.error('初始化失败~')
            }
        },
        async downloadVal(){
           await getresourcesDonloadVal(this.id)
        }
    },
    props:["id"]
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
            display block
            padding-top 25px
        }
        .left-box
            flex 3.8
            margin-right 15px
            background-color #fff
            padding 25px 20px
            box-sizing border-box
            word-wrap:break-word
            word-break:break-all
            @media screen and (max-device-width:960px){
               margin-left 15px
            }
            .header-title
                border-bottom 1px solid #f4f4f4
                margin-bottom 15px
            .header-ico-box
                color #888
                font-size  13px
                padding 15px 0px
                @media screen and (max-device-width:960px){
                    display flex
                    flex-direction column
                }
                .item-box 
                    margin-right 20px
                    margin-bottom 5px
            .content-box
                line-height 35px
                color #333
                width 745px
                @media screen and (max-device-width:960px){
                    width 100%
                }
            .left-2-box
                background-color #fff
                margin-top 15px
                border-radius 5px
                @media screen and (max-device-width:960px){
                    margin-left 15px
                }
                .left-2-item
                    display flex
                    padding 30px 24px
                    border-bottom: 1px solid #f6f6f6
                    .reading-box
                        flex 1
                        background-color #FAFAFA
                        height 47px
                        display flex
                        flex-direction column
                        align-items center
                        justify-content center
                        border-radius 5px
                        box
                        .reading-img
                            width 26px
                            height 20px
                        .reading-num
                            font-size 12px
                            font-weight bold
                            margin-top 2px
                    .to-text
                        flex 18
                        margin-left 20px
                        .text-title
                            color #000
                            font-size 16px
                        .text-b-introduction
                            margin 10px 0px
                            color #8c8c8c
                            font-size 13px
                            line-height 23px
                        .release-time-box
                            font-size 13px
                            color #aaaaaa
                            .release-tags
                                float right 
        .right-box
            flex 1.5
            height 100%
            @media screen and (max-device-width:960px){
                display none
            }
            .right-2-sort
                background-color #ffffff
                padding 15px 16px
                box-sizing border-box
                .right-2-title
                    font-weight normal
                    font-size 18px
                    border-bottom 1px solid #eee
                    padding 15px 16px
                    i 
                        color #ffaa00
                        font-size 16px
                .sort-list
                    padding-bottom 10px
                    .sort-item
                        width 268px
                        text-align center
                        margin 10px auto 
                        img 
                            width 200px
                            height 130px
                            border-radius 4px
                        .sort-title
                            font-size 14px
                            line-height 18px
                            font-weight bold
                            text-align center
                            margin 15px 0px
                        .donloadBtn
                            display block
                            color #fff
                            background-color #6A70EC
                            padding 10px 0px
                            border-radius 3px
                            margin-bottom 20px
                        .notes
                            color #aaaaaa
                            text-align left 
                            font-size 13px
                            line-height 20px
                            .import-notes
                                color #ff0000
            .right-3-box
                margin-top 15px
</style>
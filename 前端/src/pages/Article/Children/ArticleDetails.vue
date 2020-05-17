<!-- 文章详情页 -->
<template>
    <div>
        <nav-bar-g></nav-bar-g>
        <article-list></article-list>
       <div class="article-content-box">
           <div class="left-box">
                <header class="header-title">
                    <h1>{{article.blogTitle}}</h1>
                    <div class="header-ico-box">
                        <span class="item-box">
                            <i class="fa fa-user-o" aria-hidden="true" style="color:#00aa7f"></i>
                            <span>作者：{{article.author}}</span>
                        </span>
                        <span class="item-box">
                            <i class="fa fa-tag" aria-hidden="true" style="color:#55aaff"></i>
                            <span>分类：{{article.blogTag}}</span>
                        </span>
                        <span class="item-box">
                            <i class="fa fa-clock-o" aria-hidden="true" style="color:#EEB173"></i>
                            <span>发表时间：{{article.releaseTime}}</span>
                        </span>
                        <span class="item-box">
                            <i class="fa fa-eye" aria-hidden="true" style="color:#000"></i>
                            <span>浏览量：{{article.views}}</span>
                        </span>
                    </div>
                </header>
                <article v-html="article.htmlArticle" v-highlight class="content-box">

                </article>
           </div>
           <div class="right-box">
               <div class="right-2-sort animated fadeInUp">
                    <class-nav></class-nav>
               </div>
               <div class="right-2-sort right-3-box animated fadeInUp">
                    <hot-nav></hot-nav>
               </div>
           </div>
       </div>
       <footer-g></footer-g>
       <footer-m></footer-m>
    </div>
</template>

<script>
import { getArticleDetails } from '@/api/index'
import { Message } from 'element-ui'
import navBarG from '@/components/navBarG'
import ArticleList from '@/components/Article/Mobile/ArticleListM'
import classNav from '@/components/Article/ArticleNav/classNav'
import hotNav from '@/components/Article/ArticleNav/hotNav'
import FooterG from '@/components/FooterG'
import FooterM from '@/components/Home/Mobile/FooterM'
export default {
    data () {
        return {
            article:'',
        };
    },

    components: {
        navBarG,
        ArticleList,
        classNav,
        hotNav,
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
            const result =await getArticleDetails(this.id)
            if(result.status==200){
                this.article = result.result
            }else{
                Message.error('初始化失败~')
            }
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
            .right-3-box
                margin-top 15px
</style>
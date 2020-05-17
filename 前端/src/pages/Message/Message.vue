<!-- 友链 -->
<template>
   <div>
        <nav-bar-g></nav-bar-g>
        <header style="background-color:#6a70ec;width:100%;height:60px">
            <nav-bar-m></nav-bar-m>
        </header>
        <div class="link-aff-box">
            <p class="link-aff-title">留言板</p>
            <div class="site-inf">
                <p>对于不正当留言，会删除处理。</p>
                <p>1、欢迎各位大佬留言指点，技术交流、生活趣事、小说、电影、旅游、美食、以及各种吐槽......</p>
                <p>2、忌不正当言论，辱骂、不健康、不文明等粗鄙之语</p>
                <p>做社会主义新时代好青年~</p>
            </div>
            <div class="contact">
                <a href="javascript:;" title="QQ联系我" @click="openQQcon()" rel="external nofollow" style="margin-right:10px">
                    <i class="fa fa-qq" aria-hidden="true"></i>
                    <span>2035805156</span>
                </a>
                <a href="mailto:xuqssq@163.com" title="邮箱联系我" rel="external nofollow">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                    <span>xuqssq@163.com</span>
                </a>
            </div>
        </div>
        <form class="msg-usr-box" @submit.prevent="onSubmit">
            <div class="msg-name-box">
                <label class="msg-name">姓名</label>
                <input type="text" placeholder="请输入您的姓名" class='input-bottom' required v-model="msgName">
            </div>
             <div class="msg-email-box">
                <label class="msg-email">邮件</label>
                <input type="email" placeholder="请输入您的邮件 方便回复" class='input-bottom' required v-model="msgEmail">
            </div>
             <div class="msg-comm-box">
                <label class="msg-comm">内容</label>
                <textarea rows="4" name="content" placeholder="请输入您的留言内容" class='input-bottom' style="height:auto" required v-model="msgContent"></textarea>
            </div>
            <button class="msg-post-btn" @click="postMsg()">提交留言</button>
        </form>

        <div class="msg-list-box">
            <p class="list-title">留言列表（{{msgListCount}}）</p>
            <ul class="msg-list">
                <li class="msg-item" v-for="(item,index) in msgList" :key="index">
                    <div class="msg-left-img">
                        <img src="@/../static/def.png" alt="">
                    </div>
                    <div class="msg-right-con">
                        <p class="msg-right-time-box">
                            <span>{{item.msgName}}</span>
                            <span>{{item.msgTime}}</span>
                        </p>
                        <p class="msg-right-content">
                            {{item.msgContent}}
                        </p>
                    </div>
                </li>
            </ul>
        </div>
        <paging-device  :totalCount="msgListCount" :pageSize="pageSize" v-model="pageNo"></paging-device>
        <footer-g></footer-g>
        <footer-m></footer-m>
   </div>
</template>

<script>
import navBarG from '@/components/navBarG'
import navBarM from '@/components/Home/Mobile/navBarM'
import PagingDevice from '@/components/PagingDevice'
import FooterG from '@/components/FooterG'
import FooterM from '@/components/Home/Mobile/FooterM'

import { postMsg} from '@/api/index'
import {validateEmail} from '@/utils/validate'
import {mapState} from 'vuex'
import {Message} from 'element-ui'


export default {
    data () {
       return {
           msgName:'',
           msgEmail:'',
           msgContent:'',
           pageNo:1,//第几页
           pageSize:10  //请求几条
        };
    },

    components: {
        navBarG,
        navBarM,
        PagingDevice,
        FooterG,
        FooterM
    },
    computed:{
        ...mapState(['msgList','msgListCount']),
    },
    mounted(){
        this.$store.dispatch('reqMsgList',{pageNo:this.pageNo,pageSize:this.pageSize});//留言列表
    },
    watch:{
        pageNo(){
            this.$store.dispatch('reqMsgList',{pageNo:this.pageNo,pageSize:this.pageSize});
        }
    },
    methods: {
        openQQcon(){
            window.open('tencent://message/?uin=2035805156&&Site=&Menu-=yes')
        },
        onSubmit(){return false;},//阻止 from 表单默认提交
        async postMsg(){//发表留言
            if(this.msgName&&validateEmail(this.msgEmail)==false&&this.msgContent){
                const result = await postMsg(this.msgName,this.msgEmail,this.msgContent)
                if(result.status==200){
                    this.$store.dispatch('reqMsgList',{pageNo:this.pageNo,pageSize:this.pageSize});
                    Message.success('留言成功！')
                    this.msgName=''
                    this.msgEmail=''
                    this.msgContent=''
                }else{
                    Message.error('留言失败~')
                }
            }
            // Message.error('就不给你留言气不气？？')
        },
    }
}

</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
    .link-aff-box,.msg-usr-box,.msg-list-box
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
        .site-inf
            background-color #f3f5f9
            color  #8a89a5
            padding 20px
            line-height 27px
            border-left 4px solid #cbd8f5
            margin 20px 0px
        .site-tip
            margin-top 10px
            color #666666
            line-height 24px
            font-size 13px
        .contact
            a
                color #6a70ec
    .msg-usr-box
        margin-top 10px
        label
            font-weight 700
            margin-bottom 7px
        input,textarea 
            padding 9px 12px
            outline none
            -webkit-transition padding 0.45s
            border-radius 0px
            border-left none 
            border-top none 
            border-right none
            border-bottom: 2px solid #eee
            background-color transparent
            box-shadow none 
            margin-bottom 15px
            height 34px
            width 100%
            color #888
            box-sizing border-box
            font-family '微软雅黑'
            font-size 13px
        .msg-name-box,.msg-email-box,.msg-comm-box
            display flex
            flex-direction column
            .input-bottom:focus
                padding-left 0
                border-color #6a70ec
        .msg-post-btn
            color #ffffff
            background-color #6a70ec
            border-radius 4px
            line-height 1.15
            padding 8px 18px
            border none 
            cursor pointer
            -webkit-user-select none
            -moz-user-select none
            -ms-user-select none
            user-select none
    .msg-list-box
        margin-top 10px
        .list-title
            color #333
            font-weight 700
            font-size 16px
        .msg-list 
            .msg-item
                display flex
                margin-top 25px
                .msg-left-img
                    width 50px
                    height 50px
                    img 
                        width 50px
                        height 50px
                        border-radius 50%
                .msg-right-con
                    margin-left 18px
                    .msg-right-time-box
                        font-size 15px
                        font-weight bold
                        span:nth-of-type(2)
                            color #9e9e9e
                            margin-left 10px
                            font-weight 300
                            font-size 13px
                    .msg-right-content
                        margin-top 10px
                        color #333
                        line-height 24px
                        padding-right 40px
</style>
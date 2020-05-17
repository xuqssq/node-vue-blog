<!-- 留言管理-->
<template>
    <div>   
        <div class="content-box">
            <table class="msg-content-box" cellspacing='0'>
                <tr class="msg-content-item">
                    <td>站点名称</td>
                    <td>站点Logo</td>
                    <td>站点介绍</td>
                    <td style="text-align:center;">站点地址</td>
                    <td>操作</td>
                </tr>
                <tr class="msg-content-item" v-for="(item,index) in friendsListR" :key="index">
                    <td>{{item.friendsName}}</td>
                    <td>
                        <img :src="item.friendsLogo" alt="">
                    </td>
                    <td>{{item.friendsInt}}</td>
                    <td>{{item.friendsAddress}}</td>
                    <td>
                        <button @click="editFriend(item._id)" style="background-color:#6a70ec">编辑</button>
                        <button @click="delFriends(item._id)">删除</button>
                    </td>
                </tr>
            </table>
        </div>

        <div class="editWindow animated flipInX" v-show="editFlag">
            <form class="link-inf-box" @submit.prevent="onSubmit" style="margin-left:-250px">
                <div class="link-inf-item">
                    <span>站点名称:</span>
                    <input type="text" placeholder="请填写站点名称" required class="input-inf" v-model="siteName">
                </div>
                <div class="link-inf-item">
                    <span>站点Logo:</span>
                    <input type="text" placeholder="请填写站点Logo" required class="input-inf" v-model="siteLogo">
                </div>
                <div class="link-inf-item">
                    <span>站点介绍:</span>
                    <textarea placeholder="请填写站点简介"  rows="3" required class="input-inf" style="height:auto" v-model="siteInf"></textarea>
                </div>
                <div class="link-inf-item">
                    <span>站点地址:</span>
                    <input type="text" placeholder="请填写站点地址" required class="input-inf" v-model="siteAddress">
                </div>
                <button class="add-btn" @click="saveFriend()">保存</button>
                <button class="add-btn" @click="cancelSave()">取消</button>
            </form>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { delFriends,getEditFriend,saveEditFriend } from '@/api/index'
import {Message} from 'element-ui'
export default {
    data () {
        return {
            editFlag:false,
            siteId:'',
            siteName:'',
            siteLogo:'',
            siteInf:'',
            siteAddress:''
        };
    },
    computed:{
         ...mapState(['friendsList']),
         friendsListR(){
            return this.friendsList.reverse()
         }
    },
    mounted(){
        this.$store.dispatch('reqFriendsList')
    },
    methods: {
        onSubmit(){return false;},//阻止 from 表单默认提交
        async editFriend(id){
            this.editFlag = true
            const result = await getEditFriend(id)
            if(result.status==200){
                const friendContent = result.result
                this.siteId = friendContent._id
                this.siteName = friendContent.friendsName
                this.siteLogo = friendContent.friendsLogo
                this.siteInf = friendContent.friendsInt
                this.siteAddress = friendContent.friendsAddress
            }else{
                Message.error('初始化失败~')
            }
        },
        async saveFriend(){
            if(this.siteName&&this.siteLogo&&this.siteInf&&this.siteAddress){
                const result = await saveEditFriend(this.siteId,this.siteName, this.siteLogo, this.siteInf,this.siteAddress)
                if(result.status==200){
                Message.success('修改成功!')
                this.$store.dispatch('reqFriendsList')
                this.editFlag = false
                }else{
                    Message.error('修改失败~')
                }
            }else{
                Message.error('必填内容不能为空~')
            }
        },
        cancelSave(){
            this.editFlag = false
        },
        async delFriends(id){
            const result = await delFriends(id)
            if(result.status==200){
                Message.warning('删除成功!')
                this.$store.dispatch('reqFriendsList')
            }else{
                Message.error('删除失败!')
            }
        }
    }
}

</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
    .content-box
        display flex
        justify-content center
        .msg-content-box
            word-wrap:break-word
            word-break:break-all
            .msg-content-item
                &:nth-of-type(2n+1)
                    background-color #eeeeee
                td
                    border 1px solid #e5e5e5
                    padding 10px
                    text-align center
                    font-size 13px
                    color #333
                    &:nth-of-type(1)
                        width 130px
                    &:nth-of-type(2)
                        width 120px
                        img 
                            width 90px
                            height 90px
                    &:nth-of-type(3)
                        width 300px
                    &:nth-of-type(4)
                        width 500px
                        text-align left
                        box-sizing border-box
                    &:nth-of-type(5) 
                        padding 0px 20px
                        button
                            width 80px
                            border none 
                            color #ffffff
                            background-color rgba(250,40,60,.9)
                            border-radius 4px
                            padding 10px
                            cursor pointer
    .editWindow
        background-color rgba(0,0,0,.8)
        position fixed
        left 250px
        top 60px
        width 100%
        height 100%
        display flex
        flex-direction column
        align-items center
        .link-inf-box
            width 60%
            padding 30px
            .link-inf-item
                display flex
                flex-direction column
                margin 15px 0px
                span 
                    margin-bottom 5px
                    color #6a70ec
                    font-weight 700
                .input-inf
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
                    margin-bottom 15px;
                    height 34px
                    width 100%
                    box-sizing border-box
                    font-family '微软雅黑'
                    font-size 13px
                    color #ffffff
                    &:focus
                        padding-left 0
                        border-color #6a70ec
                    &::-webkit-input-placeholder { /* WebKit browsers 适配谷歌 */
                        color: #fff;
                    }
                    &:-moz-placeholder { /* Mozilla Firefox 4 to 18 适配火狐 */
                        color: #fff;
                    }
                    &::-moz-placeholder { /* Mozilla Firefox 19+ 适配火狐 */
                        color: #fff;
                    }
                    &:-ms-input-placeholder { /* Internet Explorer 10+  适配ie*/
                        color: #fff;
                    }
            .add-btn
                line-height 1.15
                padding 15px 30px
                color #ffffff
                background-color #6a70ec
                border-radius 4px
                border none
                cursor pointer
</style>
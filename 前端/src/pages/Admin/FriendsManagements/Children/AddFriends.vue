<!-- 添加友链 -->
<template>
    <div class="box">
        <form class="link-inf-box" @submit.prevent="onSubmit">
            <div class="link-inf-item">
                <span>站点名称:</span>
                <input type="text" placeholder="请填写站点名称" required class="input-inf" v-model="siteName">
            </div>
            <div class="link-inf-item">
                <span>站点地址:</span>
                <input type="text" placeholder="请填写站点地址" required class="input-inf" v-model="siteAddress">
            </div>
            <div class="link-inf-item">
                <span>站点Logo:</span>
                <input type="text" placeholder="请填写站点Logo" required class="input-inf" v-model="siteLogo">
            </div>
            <div class="link-inf-item">
                <span>站点介绍:</span>
                <textarea placeholder="请填写站点简介"  rows="3" required class="input-inf" style="height:auto" v-model="siteInf"></textarea>
            </div>
            <button class="add-btn" @click="addFriends()">添加</button>
        </form>
    </div>
</template>

<script>
import {addFriends} from '@/api/index'
import {Message} from 'element-ui'
export default {
    data () {
        return {
            siteName:'',
            siteAddress:'',
            siteLogo:'',
            siteInf:''
        };
    },

    components: {},
    methods: {
        onSubmit(){return false;},//阻止 from 表单默认提交
        async addFriends(){
            if(this.siteName&&this.siteAddress&&this.siteLogo&&this.siteInf){
                const result = await addFriends(this.siteName,this.siteAddress,this.siteLogo,this.siteInf)
                if(result.status==200){
                    Message.success('添加成功！')
                    this.siteName=''
                    this.siteAddress=''
                    this.siteLogo=''
                    this.siteInf=''
                }else{
                    Message.error('添加失败~')
                }
            }else{
                Message.error('必填内容不能为空！')
            }
        }
    }
}

</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
    .box
        display flex
        flex-direction column
        align-items center
        margin-top 40px
        .link-inf-box
            width 60%
            padding 30px
            .link-inf-item
                display flex
                flex-direction column
                margin 15px 0px
                span 
                    margin-bottom 5px
                    color #333
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
                    color #888
                    box-sizing border-box
                    font-family '微软雅黑'
                    font-size 13px
                    &:focus
                        padding-left 0
                        border-color #6a70ec
            .add-btn
                line-height 1.15
                padding 15px 30px
                color #ffffff
                background-color #6a70ec
                border-radius 4px
                border none
                cursor pointer
</style>
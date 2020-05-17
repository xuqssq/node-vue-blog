<!-- 留言管理-->
<template>
    <div>   
        <div class="content-box">
            <table class="msg-content-box" cellspacing='0'>
                <tr class="msg-content-item">
                    <td>名称</td>
                    <td>留言时间</td>
                    <td>邮箱</td>
                    <td style="text-align:center">留言内容</td>
                    <td>操作</td>
                </tr>
                <tr class="msg-content-item" v-for="(item,index) in msgList" :key="index">
                    <td>{{item.msgName}}</td>
                    <td>{{item.msgTime}}</td>
                    <td>{{item.msgEmail}}</td>
                    <td>{{item.msgContent}}</td>
                    <td>
                        <button>回复</button>
                        <button @click="delMsg(item._id)">删除</button>
                    </td>
                </tr>
            </table>
            <paging-device  :totalCount="msgListCount" :pageSize="pageSize" v-model="pageNo"></paging-device>
        </div>
    </div>
</template>

<script>
import PagingDevice from '@/components/PagingDevice'
import { mapState } from 'vuex'
import { delMsg } from '@/api/index'
import {Message} from 'element-ui'
export default {
    data () {
        return {
            pageNo:1,//第几页
            pageSize:10  //请求几条
        };
    },

    components: {
        PagingDevice
    },
    computed:{
         ...mapState(['msgList','msgListCount']),
    },
    watch:{
        pageNo(){
            this.$store.dispatch('reqMsgList',{pageNo:this.pageNo,pageSize:this.pageSize});
        }
    },
    mounted(){
        this.$store.dispatch('reqMsgList',{pageNo:this.pageNo,pageSize:this.pageSize});
    },
    methods: {
        async delMsg(id){
            const result = await delMsg(id)
            console.log(result)
            if(result.status==200){
                Message.warning('删除成功!')
                this.$store.dispatch('reqMsgList',{pageNo:this.pageNo,pageSize:this.pageSize})
            }else{
                Message.error('删除失败!')
            } 
        }
    }
}

</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
    .content-box
        margin-left 250px
        margin-top 60px
        padding 20px
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
                        width 80px
                    &:nth-of-type(3)
                        width 140px
                    &:nth-of-type(4)
                        text-align left 
                        line-height 25px
                        width 910px
                    &:nth-of-type(5) 
                        width 200px
                        button
                            width 80px
                            border none 
                            color #ffffff
                            background-color #6A70EC
                            border-radius 4px
                            padding 10px
                            cursor pointer
                        button:nth-of-type(2)
                            background-color rgba(250,40,60,.9)
</style>
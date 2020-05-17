<!-- 资源管理-->
<template>
    <div class="content-box">
        <div>
            <table class="msg-content-box" cellspacing='0'>
                <tr class="msg-content-item">
                    <td>资源名称</td>
                    <td>发布时间</td>
                    <td>资源封面</td>
                    <td style="text-align:center;">资源链接</td>
                    <td>操作</td>
                </tr>
                <tr class="msg-content-item" v-for="(item,index) in resourcesList" :key='index'>
                    <td>{{item.resourcesTitle}}</td>
                    <td>{{item.releaseTime}}</td>
                    <td>
                        <img :src="item.imageUrl" alt="">
                    </td>
                    <td>
                        <a :href="item.fileUrl" target="_blank" rel="external nofollow">{{item.fileUrl}}</a>
                    </td>
                    <td>
                        <button @click="delRsources(item._id)">删除</button>
                    </td>
                </tr>
            </table>
            <paging-device  :totalCount="resourceCount" :pageSize="pageSize" v-model="pageNo"></paging-device>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { delResources } from '@/api/index'
import { Message } from 'element-ui'
import PagingDevice from '@/components/PagingDevice'
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
        async delRsources(id){
           const result =  await delResources(id)
           if(result.status==200){
                Message.warning('删除成功!')
                this.$store.dispatch('reqResourcesList',{pageNo:this.pageNo,pageSize:this.pageSize})
            }else{
                Message.error('删除失败!')
            }
        }
    }
}

</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
    .content-box
        margin-top 80px
        margin-left 250px
        padding 0px 20px
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
                        width 300px
                    &:nth-of-type(2)
                        width 80px
                    &:nth-of-type(3)
                        width 160px
                        img 
                            width 160px
                            height 100px
                            border-radius 6px
                    &:nth-of-type(4)
                        width 900px
                        box-sizing border-box
                        a
                            text-decoration underline
                            color #000
                    &:nth-of-type(5) 
                        padding 0px 20px
                        width 100px
                        button
                            width 80px
                            border none 
                            color #ffffff
                            background-color rgba(250,40,60,.9)
                            border-radius 4px
                            padding 10px
                            cursor pointer
</style>
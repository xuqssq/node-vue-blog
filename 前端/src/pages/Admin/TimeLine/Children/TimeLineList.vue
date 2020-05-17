<!-- 时光轴列表 -->
<template>
    <div>
        <table class="msg-content-box" cellspacing='0'>
            <tr class="msg-content-item">
                <td style="text-align:center">时光轴内容</td>
                <td>时间</td>
                <td>操作</td>
            </tr>
            <tr class="msg-content-item" v-for="(item,index) in timeLineList" :key="index">
                <td>{{item.TimeLineInt}}</td>
                <td>{{item.TimeLineTime}}</td>
                <td>
                    <button @click="delTimeLine(item._id)">删除</button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import {Message} from 'element-ui'
import {delTimeLine} from '@/api/index'
export default {
    data () {
        return {

        };
    },

    components: {},
    computed:{
        ...mapState(['timeLineList']),
    },
    mounted(){
        this.$store.dispatch('reqTimeLineList')
    },
    methods: {
        async delTimeLine(id){
            const result = await delTimeLine(id)
            if(result.status==200){
                Message.warning('删除成功!')
                this.$store.dispatch('reqTimeLineList')
            }else{
                Message.error('删除失败!')
            }
        }
    }
}

</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
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
                    width 1270px
                    text-align left 
                &:nth-of-type(2)
                    width 200px
                &:nth-of-type(3)
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
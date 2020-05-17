<!-- 添加时光轴 -->
<template>
    <div>
        <form @submit.prevent="onSubmit">
            <textarea placeholder="请填写时光轴内容"  rows="10" required class="input-inf" style="height:auto" v-model="TimeLineInt"></textarea>
            <button class="add-btn" @click="addTimeLine()">提交</button>
        </form>
    </div>
</template>

<script>
import { addTimeLine } from '@/api/index'
import {Message} from 'element-ui'
export default {
    data () {
        return {
            TimeLineInt:''
        };
    },

    components: {},

    methods: {
        onSubmit(){return false;},//阻止 from 表单默认提交
        async addTimeLine(){
            if(this.TimeLineInt){
                const result = await addTimeLine(this.TimeLineInt)
                if(result.status==200){
                   Message.success('添加成功！')
                   this.TimeLineInt=''
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
        padding 10px 25px
        color #ffffff
        background-color #6a70ec
        border-radius 4px
        border none
        cursor pointer
</style>
<!-- 技能列表 -->
<template>
    <div class="box">
        <table class="msg-content-box" cellspacing='0'>
            <tr class="msg-content-item">
                <td>技能名称</td>
                <td>技能掌握程度</td>
                <td>技能代表颜色</td>
                <td>操作</td>
            </tr>
            <tr class="msg-content-item" v-for="(item,index) in skillList" :key="index">
                <td>{{item.skillName}}</td>
                <td>{{item.skillMasteryLevel}}%</td>
                <td><div style="width:50px;height:50px;margin:0px auto" :style="{'backgroundColor':item.skillColor}"></div></td>
                <td>
                    <button @click="editSkill(item._id)" style="background-color:#6a70ec">编辑</button>
                    <button @click="delSkill(item._id)">删除</button>
                </td>
            </tr>
        </table>

        <div class="editWindow animated flipInX" v-show="editFlag">
            <form class="link-inf-box" @submit.prevent="onSubmit" style="margin-left:-250px">
                <div class="link-inf-item">
                    <span>技能名称:</span>
                    <input type="text" placeholder="请填写技能名称" required class="input-inf" v-model="skillName">
                </div>
                <div class="link-inf-item">
                    <span>技能掌握程度:</span>
                    <input type="number" placeholder="请填写一个数" required class="input-inf" v-model="skillMasteryLevel">
                </div>
                <div class="link-inf-item">
                    <span>技能颜色:</span>
                    <input type="text" placeholder="请填写一个16进制的技能代表颜色" required class="input-inf" v-model="skillColor">
                </div>
                <button class="add-btn" @click="saveSkill()">保存</button>
                <button class="add-btn" @click="cancelSave()">取消</button>
            </form>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { delSkill,getEditSkill,saveEditSkill } from '@/api/index'
import {Message} from 'element-ui'
export default {
    data () {
        return {
            editFlag:false,
            skillId:'',
            skillName:'',
            skillMasteryLevel:'',
            skillColor:'',
        };
    },

    components: {},
    computed:{
        ...mapState(['skillList']),
    },
    mounted(){
        this.$store.dispatch('reqSkillList')
    },
    methods: {
        onSubmit(){return false;},//阻止 from 表单默认提交
        async editSkill(id){
            this.editFlag = true
            const result = await getEditSkill(id)
            if(result.status==200){
                const skillContent = result.result
                this.skillId = skillContent._id
                this.skillName = skillContent.skillName
                this.skillMasteryLevel = skillContent.skillMasteryLevel
                this.skillColor = skillContent.skillColor
            }else{
                Message.error('初始化失败~')
            }
        },
        async saveSkill(){
            if(this.skillName&&this.skillMasteryLevel&&this.skillColor){
                const result = await saveEditSkill(this.skillId,this.skillName, this.skillMasteryLevel, this.skillColor)
                if(result.status==200){
                Message.success('修改成功!')
                this.$store.dispatch('reqSkillList')
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
        async delSkill(id){
            const result = await delSkill(id)
            if(result.status==200){
                Message.warning('删除成功!')
                this.$store.dispatch('reqSkillList')
            }else{
                Message.error('删除失败!')
            }
        }
    }
}

</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
    .box
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
                        width 150px
                    &:nth-of-type(2)
                        width 150px
                    &:nth-of-type(3)
                        width 150px
                    &:nth-of-type(4)
                        // box-sizing border-box
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
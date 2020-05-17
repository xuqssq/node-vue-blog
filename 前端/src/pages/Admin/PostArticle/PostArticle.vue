<!-- 发布文章-->
<template>
    <div class='content-box'>
        <form @submit.prevent="onSubmit">
            <div>
                <input type="text" placeholder="请输入标题" v-model='blogTitle' required>
                <select v-model="blogTag" class="slected">
                    <option disabled value="">请选择标签</option>
                    <option value="前端">前端</option>
                    <option value="程序设计">程序设计</option>
                    <option value="日常">日常</option>
                    <option value="阅读">阅读</option>
                    <option value="MongoDB">MongoDB</option>
                    <option value="Node.js">Node.js</option>      
                    <option value="Photoshop">Photoshop</option>      
                </select>
                <textarea type="text" placeholder="请输入摘要" rows='3' style="height:auto" v-model='blogSummary' required></textarea>    
            </div>   
            <mavon-editor v-model="markdownArticle" @change="toHtml"/>
            <button class="post-btn" @click="addArticle()">发布</button>
        </form>
    </div>
</template>

<script>
import { Message } from 'element-ui'
import { addArticle } from '@/api/index'
export default {
    data () {
        return {
            blogTitle:'',
            blogTag:'',
            blogSummary:'',
            markdownArticle:'',
            htmlArticle:''
        };
    },

    components: {
    },
    methods: {
        onSubmit(){return false;},//阻止 from 表单默认提交
        toHtml(value, render){
            this.htmlArticle = render
        },
        async addArticle(){
            if(this.blogTitle&&this.blogTag&&this.blogSummary&&this.markdownArticle){
                const result = await addArticle(this.blogTitle,this.blogTag,this.blogSummary,this.markdownArticle,this.htmlArticle)
                if(result.status == 200){
                    Message.success('发布成功')
                }else{
                    Message.error('发布失败！请联系管理员')
                }
            }else{
                Message.error('发布失败！必填内容不能为空')
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
        .slected
            width 100%
            height 50px
            border 1px solid #e9e9e9 
            background-color #f5f8fc
            margin 20px 0px
            cursor pointer
            padding 0px 9px
            border-radius 6px
            color #888
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
        .post-btn
            line-height 1.15
            padding 15px 30px
            color #ffffff
            background-color #6a70ec
            border-radius 4px
            border none
            cursor pointer
            margin-top 20px
</style>
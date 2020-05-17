<!-- 文章管理-->
<template>
    <div class="content-box">
        <div>
            <table class="msg-content-box" cellspacing='0'>
                <tr class="msg-content-item">
                    <td>文章标题</td>
                    <td>发布时间</td>
                    <td>文章标签</td>
                    <td style="text-align:center;">文章摘要</td>
                    <td>操作</td>
                </tr>
                <tr class="msg-content-item" v-for="(item,index) in articleList" :key='index'>
                    <td>{{item.blogTitle}}</td>
                    <td>{{item.releaseTime}}</td>
                    <td>{{item.blogTag}}</td>
                    <td>{{item.blogSummary}}</td>
                    <td>
                        <button @click="editArticle(item._id)" style="background-color:#6a70ec">编辑</button>
                        <button @click="delArticle(item._id)">删除</button>
                    </td>
                </tr>
            </table>
            <paging-device  :totalCount="articleListCount" :pageSize="pageSize" v-model="pageNo"></paging-device>
        </div>

        <div class="editWindow animated flipInX" v-show="editFlag">
            <form @submit.prevent="onSubmit" style="width:1500px;margin-left:-250px;margin-top:40px">
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
                <div style="margin-bottom:200px">
                    <button class="post-btn" @click="saveArticle()">保存</button>
                    <button class="post-btn" @click="cancelSave()">取消</button>
                </div>
            </form>
        </div>
    </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { delArticle,getEditArticle,saveEditArticle } from '@/api/index'
import { Message } from 'element-ui'
import PagingDevice from '@/components/PagingDevice'
export default {
    data () {
        return {
            pageNo:1,//第几页
            pageSize:10,  //请求几条
            editFlag:false,
            blogId:'',
            blogTitle:'',
            blogTag:'',
            blogSummary:'',
            markdownArticle:'',
            htmlArticle:''
        };
    },

    components: {
        PagingDevice
    },
    computed:{
        ...mapState(['articleList','articleListCount']),
    },
    watch:{
        pageNo(){
            this.$store.dispatch('reqArticleList',{pageNo:this.pageNo,pageSize:this.pageSize})
        }
    },
    mounted(){
        this.$store.dispatch('reqArticleList',{pageNo:this.pageNo,pageSize:this.pageSize})
    },
    methods: {
        onSubmit(){return false;},//阻止 from 表单默认提交
        toHtml(value, render){
            this.htmlArticle = render
        },
        async editArticle(id){
            this.editFlag = true
            const result = await getEditArticle(id)
            if(result.status==200){
                const articleContent = result.result
                this.blogId = articleContent._id
                this.blogTitle = articleContent.blogTitle
                this.blogTag = articleContent.blogTag
                this.blogSummary = articleContent.blogSummary
                this.markdownArticle = articleContent.markdownArticle
                this.htmlArticle = articleContent.htmlArticle
            }else{
                Message.error('初始化失败~')
            }
        },
        async saveArticle(){
            if(this.blogTitle&&this.blogTag&&this.blogSummary&& this.markdownArticle&& this.htmlArticle){
                const result = await saveEditArticle(this.blogId, this.blogTitle, this.blogTag, this.blogSummary, this.markdownArticle, this.htmlArticle)
                if(result.status==200){
                    Message.success('修改成功!')
                    this.$store.dispatch('reqArticleList',{pageNo:this.pageNo,pageSize:this.pageSize})
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
        async delArticle(id){
           const result =  await delArticle(id)
           if(result.status==200){
                Message.warning('删除成功!')
                this.$store.dispatch('reqArticleList',{pageNo:this.pageNo,pageSize:this.pageSize})
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
                        width 100px
                    &:nth-of-type(4)
                        width 1000px
                        text-align left
                        box-sizing border-box
                    &:nth-of-type(5) 
                        padding 0px 20px
                        width 200px
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
        overflow auto
        .slected
            width 100%
            height 50px
            border 1px solid #e9e9e9 
            background-color #f5f8fc
            margin 20px 0px
            cursor pointer
            padding 0px 9px
            border-radius 6px
            color #888888
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
            color #ffffff
            box-sizing border-box
            font-family '微软雅黑'
            font-size 13px
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
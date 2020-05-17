<!-- 添加资源 -->
<template>
    <div class="content-box">

        <form @submit.prevent="onSubmit">
            <div>
                <input type="text" placeholder="请输入标题" v-model='resourcesTitle' required>
                <textarea type="text" placeholder="请输入摘要" rows='3' style="height:auto" v-model='resourcesSummary' required></textarea>    
            </div>   
            <mavon-editor v-model="markdownResources" @change="toHtml"/>

             <div class="upBox">
                 <div class="upload">
                    <el-upload
                        class="avatar-uploader"
                        :action= domain
                        :http-request = upqiniu
                        :show-file-list="false"
                        :before-upload="beforeUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"><span style="font-size:12px">选择封面</span></i>
                    </el-upload>
                </div>
                <div class="uploadFile">
                    <el-upload
                        class="avatar-uploader"
                        :action= domain
                        :http-request = upqiniuFile
                        :show-file-list="false">
                        <p v-if="fileUrl" class="avatarFile">{{fileUrl}}</p>
                        <p v-else class="chooseBtn">
                            <span v-if='upTime'>点击选择文件</span>
                            <span v-else>上传中...</span>
                        </p>
                    </el-upload>
                </div>
             </div>
            <button class="post-btn" @click="addResources()">发布</button>
        </form>
    </div>
</template>

<script>
import { Message } from 'element-ui'
import axios from 'axios'
import { addResources } from '@/api/index'
export default {
  data () {
    return {
        imageUrl: '',
        fileUrl:'',
        token: {},
        tokenFile:{},
        // 七牛云的上传地址，根据自己所在地区选择，我这里是华南区
        domain: 'https://upload-z2.qiniup.com',
        // 这是七牛云空间的外链默认域名
        qiniuaddr: 'pic.xuqssq.com',
        qiniuaddrFile:'file.xuqssq.com',

        resourcesTitle:'',
        resourcesSummary:'',
        markdownResources:'',
        htmlResources:'',
        upTime:true //上传资源状态
    }
  },
  methods: {
    // 上传图片到七牛云
    upqiniu (req) {
        // console.log(req)
        const config = {
            headers: {'Content-Type': 'multipart/form-data'}
        }
        let filetype = ''
        if (req.file.type === 'image/png') {
            filetype = 'png'
        } else {
            filetype = 'jpg'
        }
        // 重命名要上传的文件
        const keyname = 'blog' + new Date() + Math.floor(Math.random() * 100) + '.' + filetype
        // 从后端获取上传凭证token
        axios.get('https://localhost:4000/api/token').then(res => {
            // console.log(res.data.result)
            const picToken = res.data.result
            const formdata = new FormData()
            formdata.append('file', req.file)
            formdata.append('token', picToken)
            formdata.append('key', keyname)
            // 获取到凭证之后再将文件上传到七牛云空间
            axios.post(this.domain, formdata, config).then(res => {
                this.imageUrl = 'https://' + this.qiniuaddr + '/' + res.data.key
                //   console.log(this.imageUrl)
            })
        })
    },
    // 验证文件合法性
    beforeUpload (file) {
        const isJPG = file.type === 'image/jpeg' || file.type === 'image/png'
        const isLt2M = file.size / 1024 / 1024 < 2
        if (!isJPG) {
            Message.error('上传的图片格式不正确!')
        }
        if (!isLt2M) {
            Message.error('上传头像图片大小不能超过 2MB!')
        }
        return isJPG && isLt2M
    },
    // 上传文件到七牛云
    upqiniuFile (req) {
    //   console.log(req)
      let typeName = req.file.name
        const config = {
            headers: {'Content-Type': 'multipart/form-data'}
        }
        //重命名
        const keyname ='blogFile' + new Date() + Math.floor(Math.random() * 100) + '---'+typeName
        // 从后端获取上传凭证token
        axios.get('https://localhost:4000/api/stokenFile').then(res => {
            // console.log(res.data.result)
            const picToken = res.data.result
            const formdata = new FormData()
            formdata.append('file', req.file)
            formdata.append('token', picToken)
            formdata.append('key', keyname)
            // 获取到凭证之后再将文件上传到七牛云空间
            this.upTime = false
            axios.post(this.domain, formdata, config).then(res => {
                this.fileUrl = 'https://' + this.qiniuaddrFile + '/' + res.data.key
                this.upTime = true
                //   console.log(this.fileUrl)
            })
        })
    },
    onSubmit(){return false;},//阻止 from 表单默认提交
    toHtml(value, render){
        this.htmlResources = render
    },
    async addResources(){
        if(this.resourcesTitle&&this.resourcesSummary&&this.markdownResources&&this.imageUrl&&this.fileUrl){
            const result = await addResources(this.resourcesTitle,this.resourcesSummary,this.markdownResources,this.htmlResources,this.imageUrl,this.fileUrl)
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
        .upBox
            display flex
            align-items flex-end
            .upload 
                width 200px
                height 140px
                border 1px solid #888
                border-radius 6px
                margin-top 20px
            .uploadFile
                color #ffffff
                margin 0 30px
            .avatar-uploader .el-upload 
                border 5px dashed #ca1717 !important
                border-radius 6px
                cursor pointer
                overflow hidden
            .avatar-uploader-icon
                font-size 28px
                color #8c939d
                width 200px
                height 140px
                line-height 140px
                text-align center
            .avatar 
                width 200px
                height 140px
                display block
                border-radius 6px
            .avatarFile
                width 100%
                height 100%
                padding 10px
                // background-color #409eff
                background-color rgba(0,0,0,.8)
                border-radius 6px
                z-index 5
            .chooseBtn
                display block
                padding 15px 0px
                background-color #000
                width 200px
                border-radius 6px
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
            width 100%
            font-size 15px
</style>
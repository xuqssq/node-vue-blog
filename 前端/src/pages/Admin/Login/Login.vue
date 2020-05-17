<!-- 后台登录 -->
<template>
  <div id="app">
    <div class="overlay" v-show="overlay"></div>
    <div class="tab_box">
        <div class="loginBox">
            <div class="userImage">
                <img src="@/../static/catFace.png">
            </div>
            <form id="loginForm">
                <div class="input-wrapper">
                    <label>邮箱:</label>
                    <input type="email" name="" placeholder="请输入邮箱" v-model='model.email' :class="{'warning':errorEmail}" @keyup.enter="login">
                    <div class="error-email" v-show="errorEmail">
                        <div class="email-msg">请输入正确的邮箱</div>
                        <div class="triangle"></div>
                    </div>
                </div>
                <div class="input-wrapper">
                    <label>密码:</label>
                    <input type="password" name="" placeholder="密码" v-model='model.password' :class="{'warning':errorEmail}"  @keyup.enter="login">
                    <div class="error-pass" v-show="errorPass">
                        <div class="pass-msg">密码输入错误</div>
                        <div class="triangle"></div>
                    </div>
                </div>
                <input type="button" name="" value="登录" @click.prevent='login()'>
            </form>
        </div>
    </div>
    <div class="confirmation showOk" v-show="showOk">
        <img src="@/../static/gato.jpg">
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import {doLogin} from'@/api/index.js'
import {validateEmail} from '@/utils/validate'
import cookie from "cookie_js";
export default {
    data () {
        return {
            overlay:false,
            showOk:false,
            errorEmail:false,
            errorPass:false,
            model:{
             email:'',
             password:''
            },
        };
    },
    methods: {
       async login(){
            const result = await doLogin(this.model);
            // console.log(result)
            if(result.status==200){
                this.overlay=true;
                this.showOk=true;
                this.errorEmail=false;
                this.errorPass=false;
                cookie.set("email", "xuqssq@163.com","d1");
                setTimeout(()=>{
                    this.$router.push({path:'/admin/dashboard'});
                },1500)

            }else{
                this.errorEmail=true;
                this.errorPass=true;
            }
        }
    }
}

</script>
<style scoped>
    body,
    html,
    #app{
        display: flex;
        justify-content: center;
        align-items: center;
        /* background-color: #66e8dc; */
        padding: 245px 0px;
    }
    .tab_box{
        color: #626262;
    }
    
    .loginBox {
        width: 330px;
        background-color: white;
        box-shadow: 0px 0px 43px -2px rgba(135, 130, 135, 1);
        border-radius: 8px;
        padding: 15px;
    }
    
    .userImage {
        border-radius: 50%;
        overflow: hidden;
        width: 120px;
        height: 120px;
        margin: 10px auto 30px;
    }
    
    img {
        width: 100%;
    }
    
    .input-wrapper {
        position: relative;
    }
    
    .error-email,
    .error-pass {
        position: absolute;
        top: 5px;
        padding: 5px 10px;
        right: 0;
        color: white;
        background-color: #66e8dc;
        border-radius: 10px;

    }
    
    .triangle {
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid #66e8dc;
        position: absolute;
        right: 18px;
        bottom: -8px;
    }
    
    input {
        display: block;
        width: 300px;
        padding: 15px 10px;
        border-radius: 8px;
        border: 1px solid #ececec;
        margin: 10px 0;
    }
    
    input[type="button"] {
        width: 100%;
        margin-top: 35px;
        background-color: #32bfb2;
        color: white;
        font-weight: lighter;
        cursor: pointer;
    }
    
    .warning {
        border-color: red
    }
    
    .confirmation {
        width: 200px;
        position: absolute;
        top: 0;
        border-radius: 50%;
        overflow: hidden;
        height: 200px;
        left: 50%;
        margin-left: -100px;
        top: 50%;
        margin-top: -100px;
        box-shadow: 10px 10px 10px;
        z-index: 10
    }
    
    .overlay {
        background: rgba(14, 14, 14, 0.57);
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 9;
    }
    
    .showOk {
        animation: showOk 1s ease 1 normal;
        width: 200px;
        height: 200px;
    }
    
    @keyframes showOk {
        from {
            transform: scale(0);
            opacity: 0
        }
        to {
            transform: scale(1);
            opacity: 1;
        }
    }
</style>
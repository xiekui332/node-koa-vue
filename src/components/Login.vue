<template>
    <div id="login-wrp">
        <img src="../assets/LOGIN.png" alt="img" class="logo-img">

        <div class="login-box">
            <p class="login-title">项目管理平台</p>
            <div class="input-box">
                <div class="input-item">
                    <el-input v-model="input" placeholder="请输入内容" class="input-txt input-count"></el-input>
                </div>
                <div class="input-item">
                    <el-input v-model="input" placeholder="请输入内容" class="input-txt input-pass"></el-input>
                </div>
            </div>

            <el-row class="login-btn">
                <el-button type="primary" round @click="login">登录系统</el-button>
            </el-row>
        </div>
    </div>
</template>

<script>
import { login } from '@/service/api'
export default {
    props: {

    },
    components: {

    },
    data() {
        return {
            input:''
        };
    },
    computed: {

    },
    watch: {

    },
    methods: {
        login() {
            login()
        }
    },
    created() {

    },
    mounted() {

    },
};
</script>

<style scoped lang="less">
#login-wrp{
    overflow: hidden;
    .logo-img{
        float: left;
        width:360px;
        height: 96px;
        margin: 60px 0 0 90px;
    }
    .login-box{
        width: 360px;
        height: 340px;
        background: #FFFFFF;
        box-shadow: 0 2px 4px 0 #D0D0D0;
        border-radius: 4px;
        margin:280px 0 0 200px;
        overflow: hidden;
        .login-title{
            font-family: PingFangSC-Medium;
            font-size: 24px;
            color: #39475B;
            letter-spacing: 0;
            text-align: left;
            margin: 30px;
        }
        .input-box{
            width: 320px;
            margin: 0 auto;
            .input-item{
                height: 50px;
                margin-bottom: 20px;
                position: relative;
                border:1px solid #ddd; 
                border-radius: 4px;
                .input-txt{
                    width: 88%;
                    margin-left: 12%;
                }
                >.input-txt /deep/ .el-input__inner{
                    border: none;
                    height: 50px;
                    padding: 0;
                }
              
              
            };
            .input-item:nth-child(1) {
                background: url('../assets/ID.png') no-repeat 10px 13px;
            };
            .input-item:nth-child(2) {
                background: url('../assets/Password.png') no-repeat 10px 13px;
            }
        }
        .login-btn{
            width: 320px;
            height: 42px;
            margin: 0 auto;
            .el-button{
                width: 100%;
                background: #3B7CFF;
            }
        }
    }
}
</style>

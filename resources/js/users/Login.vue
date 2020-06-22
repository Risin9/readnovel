<template>
    <el-row type="flex">
        <el-col :span="8" :offset="8">
            <div class="login-container">
                <el-form :model="loginInfo" :rules="rules" ref="loginInfo" action="">
                    <el-form-item>
                        <el-input placeholder="用户名或邮箱" v-model="loginInfo.loginName" class="user-info-input user-name-input" clearable></el-input>
                        <el-input placeholder="请输入密码" v-model="loginInfo.password" class="user-info-input" show-password></el-input>
                        <el-button type="submit" size="small" class="login-but">登录</el-button>
                        <!--<el-button type="submit" size="small" @click="login(loginInfo)" class="login-but">登录</el-button>-->
                    </el-form-item>
                </el-form>
            </div>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                loginInfo:{
                    loginName: '',
                    password: ''
                },
                rules:{

                }
            }
        },
        methods:{
            // login(loginInfo){
            //     axios.post("/auth/login",{loginInfo}).then(function(response){
            //         console.log(response);
            //     }).catch(function(error){
            //         console.log(error);
            //     });
            // }
        }
    }
</script>

<style scoped>

.login-container {
    width: 581px;
    height: 363px;
    border-radius: 15px;
    border: solid 1px #fc4850;
    margin-top: 90px;
}
.user-info-input{
    width: 290px;
    height: 32px;
    border-radius: 2px;
    display: flex;
    background: #ffffff;
    margin: 40px auto;
}
.user-name-input{
    margin-top: 80px;
}
.login-but{
    margin: auto;
    display: flex;
}
</style>

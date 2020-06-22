<template>
    <el-row type="flex">
        <el-col :span="8" :offset="8">
            <div class="login-container">
                <el-form :model="userInfo" :rules="rules" name="userInfo" ref="userInfo" action="register" method="post" class="register-form">
                    <el-form-item prop="userName">
                        <el-input placeholder="请输入用户名" v-model="userInfo.userName" class="user-info-input user-name-input" clearable></el-input>
                    </el-form-item>
                    <el-form-item prop="email">
                        <el-input placeholder="邮箱" v-model="userInfo.email" class="user-info-input" clearable></el-input>
                    </el-form-item>
                    <el-form-item prop="pwd">
                        <el-input placeholder="密码" v-model="userInfo.pwd" class="user-info-input" show-password></el-input>
                    </el-form-item>
                    <el-form-item prop="repeatPwd">
                        <el-input placeholder="重复密码" v-model="userInfo.repeatPwd" class="user-info-input" show-password></el-input>
                    </el-form-item>
                    <el-button type="submit" size="small" @click="submitReigsterInfo('userInfo')" class="register-but">注册</el-button>
                </el-form>
                
            </div>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "register",
        data() {
            /**
             * 验证用户名是否合法
             */
            var validateUserName = (rule, value, callback) => {
                let userNameLength = value.length;
                if(userNameLength){
                    if (userNameLength >=3 && userNameLength <=20) {
                        //validate user name is valid
                        let userInfo = {userName:value};
                        axios.post('getUserIdByNameOrEmail', {userInfo:userInfo}).then(function(response){

                            if (response.data['id']) {
                                callback('用户名已被注册');
                            }else{
                                callback();
                            }
                        }).catch(error => console.log(error));
                    } else {
                        callback(new Error('用户名长度为3-20个字符'))
                    }
                    
                }else{
                    callback(new Error('请输入用户名'))
                }
            };

            /**
             * 验证邮箱是否合法
             */
            var validateEmial = (rule, value, callback) => {
                let reg = /^[0-9a-zA-Z_-]+(\.[0-9a-zA-Z_-]+)*@[0-9a-zA-Z_-]+(\.[0-9a-zA-Z_-]+)+$/;
                
                if (value) {
                    if (!reg.test(value)) {
                        callback(new Error("邮箱格式错误"));
                    }else{
                        let userInfo = {email:value};
                        axios.post('getUserIdByNameOrEmail',{userInfo:userInfo}).then(function (response) {
                            if (response.data['email']) {
                                callback('邮箱已存在');
                            }else{
                                callback();
                            }
                        }).catch();
                    }
                }else{
                    callback('请输入邮箱地址');
                }
                
            };
            /**
             * 验证重复面是否合法
             */
            var validateRepeatPwd = (rule, value, callback) => {
                if (!value) {
                    callback(new Error('请再次输入密码'));
                } else if(value !== this.userInfo.repeatPwd) {
                    callback(new Error('两次输入密码不一致'))
                }else{
                    callback();
                }
            };
            return {
                userInfo: {
                    userName: '',
                    email: '',
                    pwd: '',
                    repeatPwd: '',
                },
                rules:{
                    userName:[
                        {validator: validateUserName, triger: "blur"}
                    ],
                    email:[
                        {validator: validateEmial, triger:'blur'}
                    ],
                    pwd:[
                        {required:true, message:"请输入密码", triger: "blur"},
                        {min:3, max:20, message:"密码长度为3-20", triger: "blur"}
                    ],
                    repeatPwd:[
                        {validator:validateRepeatPwd, triger: "blur"}
                    ]
                },
                
            }
        },
        methods:{
            submitReigsterInfo(userInfo){
                var _this = this;
                _this.$refs[userInfo].validate((valid) => {
                    
                    if (valid) {
                       //submit form
                       //let formData = JSON.stringify(this.userInfo);
                       let formData = _this.userInfo;
                       
                       axios.post('register', {formData}).then(function (response) {
                           if (response.data) {
                               alert('注册成功!');
                               _this.$router.push({path: '/'});
                           }
                       }).catch(function (error) {
                           console.log(error)
                       });

                    }else{
                        return false;
                    }
                });

                //console.log(_this.testData);
            }
        }
    }
</script>

<style>

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
    margin:5px auto;
}
.user-name-input{
    margin-top: 40px;
}
.register-but{
    margin: auto;
    display: flex;
}

.register-form .el-form-item__error{
    left: 150px;
}
/* .register-form .el-form-item__error:before{
    content: "11";
    background: url('/image/icons/information.png') no-repeat;
} */

</style>

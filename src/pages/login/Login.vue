<template>
  <div>
    <div id="login">
      <div id="login-form">
        <div id="login-name">
          <div id="login-logo">Ant Design 管理系统</div>
        </div>

        <el-form
          ref="loginForm"
          :model="loginFormData"
          :rules="loginFormRule"
          :style="{padding: 0}"
        >
          <el-form-item prop="username">
            <el-input
              v-model="loginFormData.username"
              prefix-icon="el-icon-user"
              :style="{fontSize: '16px', fontWeight: 'bold'}"
              clearable
              @keyup.enter.native="submitForm('loginForm')"
              @input.native="validateEmail('loginForm')"
              autocomplete="off"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              v-model="loginFormData.password"
              prefix-icon="el-icon-key"
              :style="{fontSize: '16px', fontWeight: 'bold'}"
              clearable
              @keyup.enter.native="submitForm('loginForm')"
              @input.native="validatePassword('loginForm')"
              autocomplete="new-password" 
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              id="submit-button"
              @click="submitForm('loginForm')"
              @keyup.enter.native="submitForm('loginForm')"
            >登 录</el-button>
          </el-form-item>
        </el-form>

        <div id="copyright"></div>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "Login",
  components: {},
  data() {
    return {
      loginFormData: {
        username: "",
        password: ""
      },
      loginFormRule: {
        username: [
          { required: true, message: "请输入用户名", trigger: "input" },
          { min: 3, max: 6, message: "长度在 3 到 6 个字符", trigger: "input" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "input" },
          { min: 3, max: 6, message: "长度在 3 到 6 个字符", trigger: "input" }
        ]
      }
    };
  },
  methods: {
    validateEmail(formName) {
      // 单独验证用户名
      this.$refs[formName].validateField("username", valid => {
        if (valid) {
          console.log("验证通过!");
        } else {
          console.log("验证未通过!");
        }
      });
    },
    validatePassword(formName) {
      this.$refs[formName].validateField("password", valid => {
        if (valid) {
          console.log("验证通过！");
        } else {
          console.log("验证未通过！");
        }
      });
    },
    submitForm(form) {
      let _this = this;
      this.$refs[form].validate(valid => {
        if (valid) {
          _this.$axios
            .post("/api/article/check_login_status/", {
              username: this.loginFormData.username,
              password: this.loginFormData.password
            })
            .then(res => {
              _this.$notify.success({
                title: "成功提示",
                message: "登录成功！"
              });
              setTimeout(() => {
                localStorage.setItem("islogin", 1);
                _this.$router.push({ path: "/table" });
              }, 1 * 1000);
            })
            .catch(error => {
              _this.$notify.error({
                title: "错误提示",
                message: "网络错误，登录失败！"
              });
            });
        } else {
          _this.$notify.error({
            title: "错误提示",
            message: "用户名或密码错误，登录失败！"
          });
        }
      });
    }
  },
  mounted() {}
};
</script>
 
<style scoped>
body {
  margin: 0;
}

#login {
  top: 38%;
  position: fixed;
  width: 420px;
  left: 50%;
  margin-left: -210px;
  margin-top: -187px;
  height: 374px;
  /*background: #ffffff;*/
  border: 0 solid #d8d8d8;
  padding-top: 40px;
  padding-bottom: 30px;
  font-family: "微软雅黑";
}

#login-name {
  position: relative;
  height: 60px;
  line-height: 60px;
  font-size: 36px;
  text-align: center;
  margin-bottom: 24px;
  color: #002a8d;
  font-family: "微软雅黑";
  font-weight: bold;
  color: #ffffff;
  text-shadow: rgb(51, 51, 51) 1px 1px 1px;
}
#login-logo {
  position: absolute;
  width: 434px;
  text-align: center;
  height: 60px;
  line-height: 60px;
  position: absolute;
  left: 0;
  top: -15px;
}
.login-icon {
  position: absolute;
  left: 16px;
  top: 1px;
  width: 40px;
  height: 32px;
  z-index: 1;
  background: #f0f0f0;
  border-top: 0 solid #e4eaec;
  border-left: 0 solid #e4eaec;
  border-bottom: 0 solid #e4eaec;
}

#submit-button {
  width: 100%;
  font-size: 20px;
}

#copyright {
  position: absolute;
  width: 100%;
  height: 50px;
  line-height: 50px;
  bottom: -10px;
  left: 0;
  font-size: 14px;
  text-align: center;
  color: #ffffff;
  text-shadow: 1px 1px 1px #666666;
}

.bg-white {
  background: #ffffff;
}

.help-block {
  display: block;
  margin-top: 38px !important;
  margin-bottom: 10px;
  color: #737373;
}
</style>
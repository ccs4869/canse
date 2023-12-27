<template>
  <div class="login-container">
    <!-- <video
      poster="../../assets/images/login/video-cover.jpeg"
      loop
      autoplay
      muted
    >
      <source src="../../assets/images/login/night.mp4" />
    </video> -->
    <el-form
      ref="loginFormRef"
      :model="registerForm"
      class="login-form"
      autocomplete="on"
      label-position="left"
    >
      <div class="title-container">
        <h3 class="title">系统登录</h3>
        <!-- <LangSelect :isWhite="true" class="set-language" /> -->
      </div>
      <el-form-item label="账号">
        <el-input v-model="registerForm.username" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="registerForm.password" />
      </el-form-item>
      <el-form-item style="text-align: center">
        <el-button :dark="isDark" plain @click="onRegister"> 确定 </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, getCurrentInstance, ComponentInternalInstance } from "vue"
import { useRouter } from "vue-router"
import { ElMessage, ElMessageBox } from "element-plus"
import { useMainStore } from "../../../store"
import request from "../../../utils/request"
import { stringify } from "qs"
const { appContext } = getCurrentInstance() as ComponentInternalInstance
//  as ComponentInternalInstance
const router = useRouter()
const onRegister = () => {
  // appContext.config.globalProperties.$message.success("登陆成功")
  ElMessage.success("注册成功")
  request.postRegiste(stringify(registerForm))
  // useMainStore().switchLoginCom()
}

const isDark = false
const registerForm = reactive({
  username: "",
  password: ""
})
</script>
<style lang="scss" scoped>
$lightGray: lightgray;
.login-container {
  height: 100%;
  width: 100%;
  overflow: hidden;
  video {
    position: absolute;
    /* Vertical and Horizontal center*/
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
    .title-container {
      position: relative;
      .title {
        font-size: 26px;
        color: $lightGray;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
      }
    }
  }
}
</style>

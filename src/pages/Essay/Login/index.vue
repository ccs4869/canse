<template>
  <div>
    <el-button @click="toLogin">login</el-button>
    <el-button @click="toRegister">Regist</el-button>
    <el-button @click="getTest">testapi</el-button>
    <keep-alive>
      <component :is="statusId"></component>
    </keep-alive>
  </div>
</template>

<script setup lang="ts">
import { ref, shallowRef } from "vue"
import { useMainStore } from "../../../store"
import LoginCom from "./Login.vue"
import RegisterCom from "./Register.vue"
import request from "../../../utils/request"

import axios from "axios"
const store = useMainStore()
const componentId = store.componentId
console.log(componentId)
const statusId = shallowRef(LoginCom)
const toLogin = () => {
  statusId.value = LoginCom
}
const toRegister = () => {
  statusId.value = RegisterCom
}
const getTest = () => {
  request.getTest().then((res) => console.log(res))
  // request.getTest().then((res) => console.log(res))
}
</script>
<style lang="scss" scoped></style>

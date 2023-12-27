<template>
  <Bg v-if="route.meta.status" />

  <Nav v-if="route.meta.status" />
  <router-view></router-view>

  <a
    style="opacity: 0.3"
    href="https://beian.miit.gov.cn/"
    target="_blank"
    class="tengxuyun"
    >粤ICP备2022123185号-1</a
  >
</template>

<script setup lang="ts">
import Nav from "./components/Nav.vue"
import Bg from "./components/Bg.vue"
import { useRoute } from "vue-router"
const route = useRoute()
</script>

<style lang="scss" scoped>
.tengxuyun {
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  font-size: small;
}
</style>

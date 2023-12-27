<template>
  <div class="container">
    <Suspense>
      <template #default>
        <Tab :status="headRef.status" ref="tabRef" />
      </template>
      <template #fallback>
        <h2>loading...</h2>
      </template>
    </Suspense>
    <div class="right-container">
      <Header
        ref="headRef"
        :pathName="[tabRef.pathFirstName, tabRef.pathSecondName]"
        style="margin-bottom: 20px"
      ></Header>
      <!-- 二级路由 -->
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, ref } from "vue"
import Header from "./components/Header.vue"
const Tab = defineAsyncComponent(() => import("./components/Tab.vue"))
const tabRef = ref({ pathFirstName: "", pathSecondName: "" })
const headRef = ref({ status: true })
</script>
<style scoped lang="scss">
.container {
  display: flex;
}
.right-container {
  flex: 1;
}
</style>

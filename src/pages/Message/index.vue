<template>
  <div class="container">
    <Suspense>
      <Source></Source>
      <template #fallback> Loading... </template>
    </Suspense>
    <div class="personal">
      <div class="personal-center"></div>
      <div class="personal-center"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, onMounted, reactive, Suspense } from "vue"
const Source = defineAsyncComponent(() => import("./components/Source.vue"))
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  background-color: #f6f6f6;
}
.personal {
  width: 262px;
  // height: 316px;
  margin-top: 20px;

  background-color: #fff;
  padding: 0 17px;
  &-center {
    margin-top: 20px;

    width: 262px;
    height: 316px;
  }
}
</style>

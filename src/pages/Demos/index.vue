<template>
  <main class="main">
    <Alive></Alive>
    <Living width="40rem" height="4rem" @click="toDemo">
      <template #title>Minesweeper</template>
      <template #intro>the 1st game i test in my blog</template>
    </Living>
    <!-- <h2>demos</h2> -->
  </main>
</template>

<script setup lang="ts">
import {} from "vue"
import { useRouter, useRoute } from "vue-router"
const router = useRouter()
const toDemo = () => {
  router.push("/demos/minesweeper")
}
</script>
<style lang="scss" scoped>
.main {
  width: 650px;
  margin: 0 auto;
}
</style>

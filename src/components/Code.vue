<template>
  <div class="code">
    <slot name="codeTit"> </slot>

    <p><slot></slot></p>

    <div class="code-main">
      <slot name="codeMain"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia"
import { onMounted, watchEffect, ref, watch } from "vue"
import { useMainStore } from "../store"
onMounted(() => {
  setCodeMode()
})
const store = useMainStore()
const { mode } = storeToRefs(store)
watch(mode, (val, oldVal) => {
  setCodeMode()
  console.log(mode.value)
})

const setCodeMode = () => {
  if (mode.value) {
    document.querySelector(".code-main")!.className = "code-main code-dark"
  } else {
    document.querySelector(".code-main")!.className = "code-main code-light"
  }
}
</script>
<style lang="scss" scoped>
.code {
  width: 650px;
  p {
    margin: 20px 0;
  }
  &-main {
    border-radius: 3px;
    padding: 10px 5px;
    // background-color: #fbfbfb;
    transition: background-color 0.2s linear;
  }
}
.code-dark {
  background-color: #111;
}
.code-light {
  background-color: #fbfbfb;
}
</style>

<template>
  <div>
    <Markdown :class="'md ' + theme" :source="source" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, watchEffect } from "vue"
import { useMainStore } from "../../store"
import "./styles/light.css"
import "./styles/dark.css"
import Markdown from "vue3-markdown-it"
const store = useMainStore()

const theme = ref("light")
type Props = {
  source: string
}
defineProps<Props>()

watchEffect(() => {
  // let theme
  if (store.mode) {
    console.log("dark")
    theme.value = "dark"
  } else {
    console.log("light")
    theme.value = "light"
  }
})
</script>
<style lang="scss" scoped>
.md pre {
  background-color: #ddd !important;
}
</style>

<template>
  <div>
    <div ref="hljs_dom" :class="'hljs-container ' + theme" codetype="css">
      <highlightjs
        class="hl"
        :language="proLang"
        :autodetect="false"
        :code="code"
      ></highlightjs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect, defineProps } from "vue"
import { useMainStore } from "../../store"
import "./styles/dark.css"
import "./styles/light.css"

type sourceType = {
  code: string
}
defineProps<sourceType>()
const store = useMainStore()
const hljs_dom = ref()
const proLang = ref("Css")
const theme = ref("light")

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
/* 语法高亮 */
.hljs-container {
  width: 650px;
  overflow-x: hidden;
  line-height: 20px;
  text-align: left;
  background: inherit;
  border-radius: 10px;
  font-size: 14.7px;
  font-family: "monospace";
  // box-shadow: 0 10px 30px 0 rgb(255 255 255 / 40%);
}

/** 3个点 */
// .hljs-container::before {
//   position: absolute;
//   top: 10px;
//   left: 15px;
//   width: 12px;
//   height: 12px;
//   overflow: visible;
//   font-weight: 700;
//   font-size: 16px;
//   line-height: 12px;
//   white-space: nowrap;
//   text-indent: 75px;
//   background-color: #fc625d;
//   border-radius: 16px;
//   box-shadow: 20px 0 #fdbc40, 40px 0 #35cd4b;
//   content: attr(codetype);
// }

/** 滚动条 */
:deep(.hljs) {
  overflow-x: auto;
}

:deep(.hljs::-webkit-scrollbar) {
  width: 12px !important;
  height: 12px !important;
}

:deep(.hljs::-webkit-scrollbar-thumb) {
  height: 30px !important;
  background: inherit;
  background-clip: content-box;
  border: 2px solid transparent;
  border-radius: 19px;
  opacity: 0.8;
}

:deep(.hljs::-webkit-scrollbar-thumb:hover) {
  background: #a5b3cf;
  background-clip: content-box;
  border: 2px solid transparent;
}

:deep(.hljs::-webkit-scrollbar-track-piece) {
  width: 30px;
  height: 30px;
  background: inherit;
}

::-webkit-scrollbar-button {
  display: none;
}
</style>

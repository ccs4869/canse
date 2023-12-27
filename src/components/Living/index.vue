<template>
  <a class="routes">
    <main class="main">
      <div
        class="item"
        :style="'width:' + width + ';' + 'height:' + height + ';'"
      >
        <div class="item-icon">
          <svg class="icon" viewBox="0 0 1024 1024" width="100%" height="100%">
            <path
              d="M896 819.2h-819.2C34.4576 819.2 0 784.7424 0 742.4v-409.6C0 290.4576 34.4576 256 76.8 256h819.2c42.3424 0 76.8 34.4576 76.8 76.8v409.6c0 42.3424-34.4576 76.8-76.8 76.8zM76.8 307.2a25.6 25.6 0 0 0-25.6 25.6v409.6a25.6 25.6 0 0 0 25.6 25.6h819.2a25.6 25.6 0 0 0 25.6-25.6v-409.6a25.6 25.6 0 0 0-25.6-25.6h-819.2z"
              :fill="svgColor"
              p-id="1390"
            ></path>
            <path
              d="M179.2 409.6h-51.2a25.6 25.6 0 0 1 0-51.2h51.2a25.6 25.6 0 0 1 0 51.2zM844.8 409.6h-51.2a25.6 25.6 0 0 1 0-51.2h51.2a25.6 25.6 0 0 1 0 51.2zM230.4 512h-102.4a25.6 25.6 0 0 1 0-51.2h102.4a25.6 25.6 0 0 1 0 51.2zM179.2 716.8h-51.2a25.6 25.6 0 0 1 0-51.2h51.2a25.6 25.6 0 0 1 0 51.2zM588.8 716.8h-307.2a25.6 25.6 0 0 1 0-51.2h307.2a25.6 25.6 0 0 1 0 51.2zM742.4 716.8h-51.2a25.6 25.6 0 0 1 0-51.2h51.2a25.6 25.6 0 0 1 0 51.2zM844.8 614.4h-153.6a25.6 25.6 0 0 1 0-51.2H819.2V486.4a25.6 25.6 0 0 1 51.2 0v102.4a25.6 25.6 0 0 1-25.6 25.6zM281.6 614.4h-153.6a25.6 25.6 0 0 1 0-51.2h153.6a25.6 25.6 0 0 1 0 51.2zM307.2 384a25.6 25.6 0 1 1-51.2 0 25.6 25.6 0 0 1 51.2 0zM409.6 384a25.6 25.6 0 1 1-51.2 0 25.6 25.6 0 0 1 51.2 0zM512 384a25.6 25.6 0 1 1-51.2 0 25.6 25.6 0 0 1 51.2 0zM614.4 384a25.6 25.6 0 1 1-51.2 0 25.6 25.6 0 0 1 51.2 0zM716.8 384a25.6 25.6 0 1 1-51.2 0 25.6 25.6 0 0 1 51.2 0zM358.4 486.4a25.6 25.6 0 1 1-51.2 0 25.6 25.6 0 0 1 51.2 0zM460.8 486.4a25.6 25.6 0 1 1-51.2 0 25.6 25.6 0 0 1 51.2 0zM563.2 486.4a25.6 25.6 0 1 1-51.2 0 25.6 25.6 0 0 1 51.2 0zM665.6 486.4a25.6 25.6 0 1 1-51.2 0 25.6 25.6 0 0 1 51.2 0z"
              :fill="svgColor"
              p-id="1391"
            ></path>
            <path
              d="M768 486.4a25.6 25.6 0 1 1-51.2 0 25.6 25.6 0 0 1 51.2 0zM409.6 588.8a25.6 25.6 0 1 1-51.2 0 25.6 25.6 0 0 1 51.2 0zM512 588.8a25.6 25.6 0 1 1-51.2 0 25.6 25.6 0 0 1 51.2 0zM614.4 588.8a25.6 25.6 0 1 1-51.2 0 25.6 25.6 0 0 1 51.2 0z"
              :fill="svgColor"
              p-id="1392"
            ></path>
          </svg>
        </div>
        <div class="item-content">
          <div class="item-content-title">
            <slot name="title"></slot>
          </div>
          <div class="item-content-intro">
            <slot name="intro"></slot>
          </div>
        </div>
      </div>
    </main>
  </a>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue"
import { useMainStore } from "../../store"

const svgColor = ref("#fff")
type Props = {
  width: string
  height: string
}
defineProps<Props>()
watchEffect(() => {
  svgColor.value = !useMainStore().mode ? "#000" : "#fff"
})
</script>

<style lang="scss" scoped>
// .main {
//   padding: 0.5rem 0;
// }

.item {
  // width: 17.75rem;
  // height: 4.8rem;
  padding: 0.85rem 1.1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  border-radius: 5px;
  transition-timing-function: ease-out;
  &-icon {
    width: 2.25rem;
    height: 2.25rem;
    padding-right: 1.4rem;
    background-color: inherit;

    :hover {
      cursor: pointer;
    }
  }
  &-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: inherit;
    :hover {
      cursor: pointer;
    }
    &-title {
      font-size: 1.2rem;
      padding: 0.3rem 0;
    }
    &-intro {
      font-size: 0.85rem;
      margin-bottom: 0.5rem;
      max-height: 2.2rem;
      overflow: hidden;
      opacity: 0.7;
    }
  }
}
.dark .item:hover {
  cursor: pointer;
  background-color: #090909;
}

.item:hover {
  cursor: pointer;
  background-color: #f8f8f8;
}
</style>

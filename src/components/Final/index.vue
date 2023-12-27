<template>
  <div class="final">
    <Twinkle>
      <slot name="twinkle"></slot>
    </Twinkle>
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script setup lang="ts">
import {} from "vue"
import Twinkle from "../Twinkle/index.vue"
</script>
<style lang="scss" scoped>
.final {
  margin: 60px 0;
  font-size: 0.875rem;
  line-height: 1.25rem;
  opacity: 0.7;
}
</style>

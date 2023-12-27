<template>
  <main class="item">
    <div class="item-name">
      <slot></slot>
    </div>
    <div class="item-time">
      <slot name="itemTime"></slot>
    </div>
  </main>
</template>

<script setup lang="ts">
import {} from "vue"
</script>
<style lang="scss" scoped>
.item {
  width: 650px;
  height: 44px;
  margin: 25px 0;
  &-name {
    // height: 28px;
    font-size: 1.2rem;
    opacity: 0.7;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }
  &-time {
    font-size: 0.8rem;
    opacity: 0.5;
    // color: rgba($color: #000000, $alpha: 0.5);
  }
}
</style>

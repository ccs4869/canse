<template>
  <a class="twinkle" href="#">
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
import {} from "vue"
</script>
<style lang="scss" scoped>
.twinkle {
  text-decoration: none;
  border-bottom: 1px solid rgba(125, 125, 125, 0.3);
  transition: border 0.3s ease-in-out;
}

.twinkle:hover {
  border-bottom: 1px solid rgba(125, 125, 125, 1);
}
</style>

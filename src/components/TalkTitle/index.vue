<template>
  <div>
    <h1>
      <slot name="title"></slot>
    </h1>
    <p>
      <slot name="date"></slot>
    </p>
  </div>
</template>

<script setup lang="ts">
import {} from "vue"
</script>
<style lang="scss" scoped>
h1 {
  font-size: 36px;
  font-family: "Inter";
  margin-top: 0;
  margin-bottom: 28px;
}
p {
  font-size: 16px;
  font-family: "Inter";
  opacity: 0.4;
  margin: 0;
}

@media (max-width: 720px) {
  h1 {
    font-size: 1rem;
    margin-bottom: 28px;
  }
  p {
    font-size: 16px;
    font-family: "Inter";
    opacity: 0.4;
    margin: 0;
  }
}
</style>

<template>
  <div class="timeLine-box">
    <slot name="intro"></slot>
    <slot name="site"></slot>
    <slot name="author"></slot>
  </div>
</template>

<script setup lang="ts">
import {} from "vue"
</script>
<style lang="scss" scoped>
.timeLine-box {
  font-family: "Inter";
  color: #7a7a7a;
  width: 650px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px;
  padding-left: 20px;
  // padding-top: 10px;
  border-left: 3px solid rgba($color: #e0e0e0, $alpha: 0.7);
}
</style>

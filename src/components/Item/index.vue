<template>
  <div class="item">
    <a>
      <div class="title">{{ title }}</div>
      <div class="time">{{ time }}</div>
    </a>
  </div>
</template>

<script setup lang="ts">
import {} from "vue"

type Props = {
  title: string
  time: string
}
defineProps<Props>()
</script>

<style lang="scss" scoped>
.item {
  margin-bottom: 28px;
}
.title {
  line-height: 1.2em;
  font-size: 1.125rem;
}
.time {
  opacity: 0.5;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
</style>

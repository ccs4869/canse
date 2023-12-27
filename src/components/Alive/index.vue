<template>
  <div>
    <div class="alive-title" ref="navRef">
      <!-- <span>Blog Demo</span> <strong>Project</strong> -->
      <router-link to="/">Blog</router-link>
      <router-link to="/demos">Demos</router-link>
      <router-link to="/project">Project</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import {} from "vue"
</script>
<style lang="scss" scoped>
.router-link-active {
  opacity: 1 !important;
}
.alive-title {
  font-size: 1.9rem;
  margin: 20px 0;
  margin-bottom: 30px;
  // font-weight: 700;
  a {
    // color: #ccc;
    opacity: 0.2;
    text-decoration: none;
    margin-right: 0.8rem;
    &:hover {
      opacity: 0.6;
    }
  }
}
</style>

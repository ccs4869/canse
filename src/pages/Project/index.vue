<template>
  <main class="project">
    <Alive></Alive>
    <div class="project-intro">
      <a href="/">Github</a> & <a href="/">Gitee</a>
    </div>
    <!-- <Item>
      <template #default>Build a miniVue from zero with JavaScript</template>
      <template #itemTime>Jul 3 · VSCode</template>
    </Item>
    <Item>
      <template #default>Create my personal Blog Community Issue</template>
      <template #itemTime>Jul 3 · VSCode</template>
    </Item>
    <Item>
      <template #default>Build a miniVue from zero -- with JavaScript</template>
      <template #itemTime>Jul 3 · VSCode</template>
    </Item> -->
    <Item
      title="Build a miniVue from zero with JavaScript"
      time="Web 3,2022"
    ></Item>
    <Item title="Create my personal Blog" time="Jul 28,2022"></Item>
    <Item title="Vue core" time="Nov 3,2021"></Item>
  </main>
</template>

<script setup lang="ts">
// import Item from "../../components/Item.vue"
import Alive from "../../components/Alive/index.vue"
import Item from "../../components/Item/index.vue"
// const navSwitch = (e: any) => {
//   if (!e.target.pathname) {
//     e.target.classList += " selected"
//   }
// }
</script>
<style lang="scss" scoped>
.router-link-active {
  opacity: 1 !important;
}
.project {
  width: 650px;
  margin: 0 auto;

  &-intro {
    text-indent: 1em;
    margin: 30px 0;
    margin-bottom: 60px;
    padding: 10px;
    border-left: 5px solid #e0e0e0;
  }
}
</style>

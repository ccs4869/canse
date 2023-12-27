<template>
  <main class="main">
    <TalkTitle>
      <template #title> Something about Linux </template>
      <template #date> May 31 </template>
    </TalkTitle>
    <TimeLine>
      <template #intro> 中文 Chinese Version </template>
    </TimeLine>
    <Living width="17.75rem" height="4.8rem">
      <template #title>Vue Extend</template>
      <template #intro>Trying to finish hot update</template>
    </Living>
    <Living width="17.75rem" height="4.8rem">
      <template #title>Vue Extend</template>
      <template #intro>Trying to finish hot update</template>
    </Living>
    <CodePen :code="code"></CodePen>
    <Mkdown :source="source"></Mkdown>
    <Twinkle> ImJustALink </Twinkle>
    <Final> End </Final>
    <!-- <v-md-editor v-model="text" height="400px"></v-md-editor> -->
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue"
import TimeLine from "../../components/TimeLine.vue"
import Living from "../../components/Living/index.vue"
import CodePen from "../../components/CodePen/index.vue"
import Mkdown from "../../components/Mkdown/index.vue"

const code = ref(`.my-icon {
  background: url(data:...) no-repeat center;
  background-color: transparent;
  background-size: 16px 16px;
  height: 16px;
  width: 16px;
  display: inline-block;
}
`)

const source = ref(
  "## Typora!" +
    "\r\n" +
    "> Welcome to the <b>demo</b> Feel free to type anything in the textarea!" +
    "\r\n" +
    "> > *Psst, enable the \`html\` option!* :P" +
    "\r\n" +
    "___" +
    "\r\n" +
    "- [markdown-it-abbr](https://github.com/markdown-it/markdown-it-abbr) - Add abbreviations" +
    "\r\n" +
    "```js" +
    "\r\n" +
    `console.log("Hello World! This is JavaScript.");` +
    "\r\n" +
    "```" +
    "\r\n" +
    `## [markdown-it-task-lists](https://github.com/revin/markdown-it-task-lists)

- [ ] Homework
- [x] Procrastinating`
)
</script>
<style lang="scss" scoped>
.main {
  margin: 0 auto;
  width: 650px;
}

@media (max-width: 720px) {
  .main {
    margin: 0 auto;
    width: 80%;
    // font-size: 2rem;
  }
}
</style>

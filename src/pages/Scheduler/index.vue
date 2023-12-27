<template>
  <div class="scheduler">
    <TimeLine>
      <template #intro>
        <p>finish my intro lang switch</p>
      </template>
      <template #site>
        <p>—— Canse (@1300) <a>github.com</a></p>
      </template>
      <template #author>
        <p>here is some main photography <a>Sep 06,2022</a></p>
      </template>
    </TimeLine>
    <TimeLine>
      <template #intro>
        <p>here is some main photography</p>
      </template>
      <template #site>
        <p>—— Cansne Ch (@1300) <a>github.com</a></p>
      </template>
      <template #author>
        <p>here is some main photography <a>Jane3,2022</a></p>
      </template>
    </TimeLine>
    <Final>
      <template #twinkle>CC BY-NC-SA 4.0 </template>
      2022-PRESENT © Cansen Ch
    </Final>
  </div>
</template>

<script setup lang="ts">
import {} from "vue"
import TimeLine from "../../components/TimeLine.vue"
import Final from "../../components/Final/index.vue"
</script>
<style lang="scss" scoped>
.scheduler {
  margin: 0 auto;
  width: 650px;
}
</style>
